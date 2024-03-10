"use client";

import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { useRecord } from "../useRecord";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebCam = () => {
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);

  const [onRec, setOnRec] = useState<boolean>(true);
  const { onRecord, offRecord, onSubmitAudioFile } = useRecord(onRec, setOnRec);

  return (
    <>
      <button onClick={onRec ? onRecord : offRecord}>
        {onRec ? "녹음 시작" : "녹음 끝"}
      </button>
      <button onClick={onSubmitAudioFile}>결과 확인</button>
      {isCaptureEnable || (
        <button onClick={() => setCaptureEnable(true)}>camera start</button>
      )}
      {isCaptureEnable && (
        <>
          <div>
            <button onClick={() => setCaptureEnable(false)}>camera end</button>
          </div>
          <div>
            <Webcam
              audio={false}
              width={540}
              height={360}
              ref={webcamRef}
              mirrored={true}
              screenshotFormat='image/jpeg'
              videoConstraints={videoConstraints}
            />
          </div>
          <button onClick={capture}>capture</button>
        </>
      )}
      {url && (
        <>
          <div>
            <button
              onClick={() => {
                setUrl(null);
              }}
            >
              delete
            </button>
          </div>
          <div>
            <img src={url} alt='Screenshot' />
          </div>
        </>
      )}
    </>
  );
};

export default WebCam;
