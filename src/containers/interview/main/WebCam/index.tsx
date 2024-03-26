"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import useInterval from "@utils/hooks/useInterval";
import Webcam from "react-webcam";

import styles from "../index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebCam = () => {
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);
  // useInterval(capture, 3000);
  useEffect(() => {
    // console.log(url);
  }, [url]);
  return (
    <div className={cx("video-wrapper")}>
      <Webcam
        audio={false}
        width='100%'
        height='100%'
        ref={webcamRef}
        mirrored={true}
        screenshotFormat='image/jpeg'
        videoConstraints={videoConstraints}
      />
    </div>
  );
};

export default WebCam;
