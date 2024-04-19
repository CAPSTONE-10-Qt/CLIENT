"use client";

import React, { useRef, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Webcam from "react-webcam";
import useInterval from "@utils/hooks/useInterval";
import { useRecoilValue } from "recoil";
import { interviewDataState } from "@store/interview";
import { usePostFace } from "@service/hooks/interviewDuring";

import { CamFalse } from "../../../../../public/svgs";
import styles from "../index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebCam = () => {
  const { id } = useParams();
  const { onlyVoice } = useRecoilValue(interviewDataState);
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);
  useInterval(capture, 5000);
  usePostFace(url, id as string);
  return (
    <div className={cx("video-wrapper")}>
      {onlyVoice || location.href.includes("question") ? (
        <div className={cx("cam-off")}>
          <CamFalse />
        </div>
      ) : (
        <Webcam
          audio={false}
          width='100%'
          height='100%'
          ref={webcamRef}
          mirrored={true}
          screenshotFormat='image/jpeg'
          videoConstraints={videoConstraints}
        />
      )}
    </div>
  );
};

export default WebCam;
