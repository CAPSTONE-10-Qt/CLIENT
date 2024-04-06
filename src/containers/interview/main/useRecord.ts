"use client";

import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { interviewDataState, interviewAllowState } from "@store/interview";
import { saveInterview } from "@utils/alerts/interview";

const useRecord = (
  onRec: boolean,
  setOnRec: (value: boolean) => void,
  pk: number,
) => {
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
  } = interview;
  const [allow, setAllow] = useRecoilState(interviewAllowState);

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
              setOnRec(true);
            };
            stream.getAudioTracks().forEach(function (track) {
              track.stop();
            });
            mediaRecorder.stop();
            analyser.disconnect();
            audioCtx.createMediaStreamSource(stream).disconnect();
            setTrigger(true);
          } else {
            setOnRec(false);
          }
        };
      });
  };

  const offRecord = () => {
    if (media && stream && analyser && source) {
      media.ondataavailable = function (e) {
        setAudio(e.data);
        setOnRec(true);
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

  const onSubmitAudioFile = new Promise(function (resolve, reject) {
    if (audio) {
      const sound = new File([audio], "soundBlob", {
        lastModified: new Date().getTime(),
      });
      const formData = new FormData();
      formData.append("file", sound);
      formData.append("pk", `${pk}`);

      // axios
      //   .post("http://127.0.0.1:5000/predict", formData)
      //   .then(res => {
      //     console.log(res);
      //     // 아래 then문 여기서 실행
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });

      resolve(true);
    }
  });
  useEffect(() => {
    if (trigger)
      onSubmitAudioFile.then(res => {
        if (location.href.includes("question")) {
          setAllow({ ...allow, done: true });
          saveInterview(() => router.push(`/question/detail/${pk}`), true);
        } else {
          if (currentIndex + 1 === questionNum) {
            setAllow({ ...allow, done: true });
            saveInterview(() => router.push(`/interview/detail/${pk}`));
          } else setInterview({ ...interview, currentIndex: currentIndex + 1 });
        }
      });
  }, [audio]);

  return { onRecord, offRecord, seconds };
};

export default useRecord;
