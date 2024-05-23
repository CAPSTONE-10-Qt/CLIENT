"use client";

import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  interviewDataState,
  interviewState,
  interviewTTSState,
} from "@store/interview";
import useRecord from "../useRecord";

import {
  CamFalse,
  CamTrue,
  MicFalse,
  MicTrue,
  VolumeOffFalse,
  VolumeOffTrue,
  VolumeOnFalse,
  VolumeOnTrue,
  Play,
  Stop,
} from "@svgs/.";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const Controller = () => {
  const [interview, setInterview] = useRecoilState(interviewDataState);
  const {
    questionNum,
    questionList,
    currentIndex,
    onlyVoice,
    isMicOn,
    isSpeakerOn,
  } = interview;
  const { isRunning, done, quit, isFirst5 } = useRecoilValue(interviewState);
  const toggleSpeaker = () =>
    setInterview({ ...interview, isSpeakerOn: !interview.isSpeakerOn });
  const { onRecord, offRecord, seconds } = useRecord(
    questionList[currentIndex].id,
  );

  // TTS Audio Control
  const [tts, setTTS] = useRecoilState(interviewTTSState);
  const { files, audio } = tts;
  useEffect(() => {
    if (files[currentIndex]) {
      setTTS({
        ...tts,
        audio: new Audio(
          `data:audio/mp3;base64,${files[currentIndex].audio_content}`,
        ),
      });
    }
  }, [files, currentIndex]);
  useEffect(() => {
    if (quit || done || isMicOn) {
      audio?.pause();
      if (!quit)
        setTTS({
          ...tts,
          audio: null,
        });
    } else if (audio) {
      setTimeout(() => audio.play(), isFirst5 ? 5000 : 50);
    }
  }, [audio, quit, isMicOn]);
  useEffect(() => {
    if (!audio) return;
    if (isSpeakerOn) audio.volume = 1;
    else audio.volume = 0;
  }, [isSpeakerOn, audio]);

  return (
    <div className={cx("container")}>
      <div className={cx("top-info")}>
        <div>
          <div className={cx("text-flex")}>
            <p>면접자</p>
            <span>
              {location.href.includes("question")
                ? "질문에 대한 재답변 시 음성으로만 진행"
                : "면접 중 변경 불가"}
            </span>
          </div>
          <div className={cx("icon-flex", "non-clickable")}>
            {isMicOn ? <MicTrue /> : <MicFalse />}
            {location.href.includes("question") ? (
              <CamFalse />
            ) : onlyVoice ? (
              <CamFalse />
            ) : (
              <CamTrue />
            )}
          </div>
        </div>
        <div>
          <div className={cx("text-flex")}>
            <p>면접관</p>
          </div>
          <div className={cx("icon-flex")}>
            {isSpeakerOn ? (
              <>
                <VolumeOnTrue onClick={toggleSpeaker} />
                <VolumeOffFalse onClick={toggleSpeaker} />
              </>
            ) : (
              <>
                <VolumeOnFalse onClick={toggleSpeaker} />
                <VolumeOffTrue onClick={toggleSpeaker} />
              </>
            )}
          </div>
        </div>
        {!location.href.includes("question") && (
          <div>
            <div className={cx("text-flex", "between")}>
              <p>면접 진행도</p>
              <p>{`${
                done ? 100 : Math.floor((currentIndex / questionNum) * 100)
              }% (${done ? questionNum : currentIndex} of ${questionNum})`}</p>
            </div>
            <div className={cx("progress-bar")}>
              <div
                style={{
                  width: `${
                    done ? 100 : Math.floor((currentIndex / questionNum) * 100)
                  }%`,
                }}
              />
            </div>
          </div>
        )}
      </div>
      <div className={cx("bottom-section")}>
        <div className={cx("time-text", isMicOn ? "on" : "off")}>
          <span>답변 제한 시간</span>
          <span id='record-timer-text'>{`0${Math.floor(seconds / 60)} : ${`0${
            seconds % 60
          }`.slice(-2)}`}</span>
        </div>
        <div
          className={cx("control-button", isMicOn ? "on" : "off")}
          onClick={isMicOn ? offRecord : onRecord}
        >
          {isMicOn ? <Stop /> : <Play />}
          <p>{isMicOn ? "답변 완료" : "답변 시작"}</p>
        </div>
      </div>
    </div>
  );
};

export default Controller;
