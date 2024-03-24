"use client";

import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { interviewDataState } from "@store/interview";
import { useRecord } from "../useRecord";

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
} from "../../../../../public/svgs";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const ControlSection = () => {
  const [interview, setInterview] = useRecoilState(interviewDataState);
  const { questionNum, currentIndex, onlyVoice, isMicOn, isSpeakerOn } =
    interview;
  const toggleSpeaker = () =>
    setInterview({ ...interview, isSpeakerOn: !interview.isSpeakerOn });

  const [isNotRec, setNotRec] = useState<boolean>(true);
  const { onRecord, offRecord, seconds } = useRecord(isNotRec, setNotRec);

  return (
    <div className={cx("container")}>
      <div className={cx("top-info")}>
        <div>
          <div className={cx("text-flex")}>
            <p>면접자</p>
            <span>면접 중 변경 불가</span>
          </div>
          <div className={cx("icon-flex")}>
            {isMicOn ? <MicTrue /> : <MicFalse />}
            {onlyVoice ? <CamFalse /> : <CamTrue />}
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
        <div>
          <div className={cx("text-flex", "between")}>
            <p>면접 진행도</p>
            <p>{`${Math.floor(currentIndex + (1 / questionNum) * 100)}% (${
              currentIndex + 1
            } of ${questionNum})`}</p>
          </div>
          <div className={cx("progress-bar")}>
            <div
              style={{
                width: `${Math.floor(currentIndex + (1 / questionNum) * 100)}%`,
              }}
            />
          </div>
        </div>
      </div>
      <div className={cx("time-text", isNotRec ? "off" : "on")}>
        <span>답변 제한 시간</span>
        <span id='record-timer-text'>{`0${Math.floor(seconds / 60)} : ${`0${
          seconds % 60
        }`.slice(-2)}`}</span>
      </div>
      <div
        className={cx("control-button", isNotRec ? "off" : "on")}
        onClick={isNotRec ? onRecord : offRecord}
      >
        {isNotRec ? <Play /> : <Stop />}
        <p>{isNotRec ? "답변 시작" : "답변 완료"}</p>
      </div>
    </div>
  );
};

export default ControlSection;
