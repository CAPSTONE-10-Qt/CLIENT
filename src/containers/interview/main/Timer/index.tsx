"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useInterval from "@utils/hooks/useInterval";
import { autoStartInterview, confirmQuitInterview } from "@utils/alerts";
import { StopCircle } from "../../../../../public/svgs";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const Timer = () => {
  const router = useRouter();
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const onQuit = () => {
    setIsRunning(false);
    confirmQuitInterview(
      () => router.back(),
      () => setIsRunning(true),
    );
  };
  useInterval(() => {
    if (isRunning) setTime(time + 1000);
  }, 1000);
  useEffect(() => {
    autoStartInterview(() => {
      setIsRunning(true);
    });
  }, []);
  return (
    <div className={cx("container")}>
      <div />
      <p>
        {`0${Math.floor((time / 3600000) % 60)}`.slice(-2)} :{" "}
        {`0${Math.floor((time / 60000) % 60)}`.slice(-2)} :{" "}
        {`0${Math.floor((time / 1000) % 60)}`.slice(-2)}
      </p>
      <div className={cx("stop-button")} onClick={onQuit}>
        <StopCircle />
        <p>종료</p>
      </div>
    </div>
  );
};

export default Timer;
