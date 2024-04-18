"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useRecoilState } from "recoil";
import { interviewDataState, interviewState } from "@store/interview";
import Swal from "sweetalert2";
import { saveInterview, processingLastQuestion } from "@utils/alerts/interview";

import { modelSTT } from "@service/api/model";
import { postAnswer, patchInterview } from "@service/api/interviewDuring";

const useRecord = (pk: number) => {
  const router = useRouter();
  const [stream, setStream] = useState<MediaStream>();
  const [media, setMedia] = useState<MediaRecorder>();
  const [source, setSource] = useState<MediaStreamAudioSourceNode>();
  const [analyser, setAnalyser] = useState<ScriptProcessorNode>();
  const [audio, setAudio] = useState<Blob>();

  const timeConstraint = 60;
  const [seconds, setSeconds] = useState<number>(timeConstraint);

  const [trigger, setTrigger] = useState<boolean>(false);
  const [interview, setInterview] = useRecoilState(interviewDataState);
  const {
    questionNum,
    questionList,
    currentIndex,
    onlyVoice,
    isMicOn,
    isSpeakerOn,
    id,
  } = interview;
  const [state, setState] = useRecoilState(interviewState);

  const onRecord = () => {
    const audioCtx = new window.AudioContext();
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    function makeSound(stream: MediaStream) {
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream: MediaStream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        setStream(stream);
        setMedia(mediaRecorder);
        makeSound(stream);
        setTrigger(false);
        analyser.onaudioprocess = function (e) {
          if (seconds !== timeConstraint - Math.trunc(e.playbackTime))
            setSeconds(timeConstraint - Math.trunc(e.playbackTime));
          if (e.playbackTime > timeConstraint) {
            mediaRecorder.ondataavailable = function (e) {
              setAudio(e.data);
              setInterview({ ...interview, isMicOn: false });
            };
            stream.getAudioTracks().forEach(function (track) {
              track.stop();
            });
            mediaRecorder.stop();
            analyser.disconnect();
            audioCtx.createMediaStreamSource(stream).disconnect();
            setTrigger(true);
          } else {
            setInterview({ ...interview, isMicOn: true });
          }
        };
      });
  };

  const offRecord = () => {
    if (media && stream && analyser && source) {
      media.ondataavailable = function (e) {
        setAudio(e.data);
        setInterview({ ...interview, isMicOn: false });
      };
      stream.getAudioTracks().forEach(function (track) {
        track.stop();
      });
      media.stop();
      analyser.disconnect();
      source.disconnect();
      setTrigger(true);
    }
  };

  const onSubmitAudioFile = () => {
    if (audio) {
      const sound = new File([audio], "soundBlob", {
        lastModified: new Date().getTime(),
      });
      const formData = new FormData();
      formData.append("file", sound);
      formData.append("pk", `${pk}`);
      if (
        currentIndex + 1 === questionNum ||
        location.href.includes("question")
      ) {
        setState({ ...state, done: true });
        Swal.fire(
          processingLastQuestion(() =>
            modelSTT(formData)
              .then(res => {
                console.log(res);
                const {
                  interviewQuestionId,
                  mumble,
                  silent,
                  talk,
                  time,
                  text,
                } = res.data;
                postAnswer(interviewQuestionId, {
                  mumble,
                  silent,
                  talk,
                  time,
                  text,
                })
                  .then(res => {
                    Swal.close();
                    console.log(res);
                    if (location.href.includes("question"))
                      saveInterview(() => {
                        // 재답변 종료 patch, 성공 시 then 내부에 아래 라우팅
                        router.push(`/question/detail/${pk}`);
                      }, true);
                    else
                      saveInterview(() =>
                        patchInterview(id, {
                          endDateTime: new Date().toLocaleString("ko-KR", {
                            hour12: false,
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                          }),
                        })
                          .then(res => {
                            console.log(res);
                            router.push(`/interview/detail/${id}`);
                          })
                          .catch(err => console.log(err)),
                      );
                  })
                  .catch(err => console.log(err));
              })
              .catch(err => console.log(err)),
          ),
        );
      } else {
        setInterview({
          ...interview,
          currentIndex: currentIndex + 1,
        });
        modelSTT(formData)
          .then(res => {
            console.log(res);
            const { interviewQuestionId, mumble, silent, talk, time, text } =
              res.data;
            postAnswer(interviewQuestionId, {
              mumble,
              silent,
              talk,
              time,
              text,
            })
              .then(res => {
                console.log(res);
                // 바로 다음 질문 넘길지 아니면 stt 성공해야 넘길지?
                // 응답 오는 속도가 아주 빠른 편은 아니라서 지금은 마지막 질문이 아니라면 기다리지 않음
                // 다만 중간에 알 수 없는 오류로 ML 서버에서 처리 실패하면 다시 녹음하게 할건지 모르겠음
                // 만약 확실히 저장된거 보고 넘길거면 setInterview는 여기로 옮기고 loader alert 추가해야함
              })
              .catch(err => console.log(err));
          })
          .catch(err => console.log(err));
      }
    }
  };

  useEffect(() => {
    if (trigger) onSubmitAudioFile();
  }, [isMicOn]);

  return { onRecord, offRecord, seconds };
};

export default useRecord;
