"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useRecoilState, useResetRecoilState } from "recoil";
import { interviewAllowState } from "@store/interview";

import useInterval from "@utils/hooks/useInterval";
import useBlockLeave from "@utils/hooks/useBlockLeave";
import {
  autoStartInterview,
  confirmQuitInterview,
} from "@utils/alerts/interview";
import { StopCircle } from "../../../../../public/svgs";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const Timer = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  useInterval(() => {
    if (isRunning) setTime(time + 1000);
  }, 1000);

  const router = useRouter();
  const { id } = useParams();
  const goBack = () =>
    router.push(
      location.href.includes("interview")
        ? "/interview/setup"
        : `/question/detail/${id}`,
    );

  const [allow, setAllow] = useRecoilState(interviewAllowState);
  const resetAllow = useResetRecoilState(interviewAllowState);

  useEffect(() => {
    resetAllow();
    autoStartInterview(() => {
      setIsRunning(true);
    });
  }, []);
  useBlockLeave(goBack, isRunning, setIsRunning);
  const onQuit = () => {
    setAllow({ ...allow, quit: true });
    setIsRunning(false);
    confirmQuitInterview(goBack, () => {
      setAllow({ ...allow, quit: false });
      setIsRunning(true);
    });
  };
  useEffect(() => {
    if (allow.quit) setIsRunning(false);
  }, [allow]);

  return (
    <div className={cx("container")}>
      {location.href.includes("question") ? null : (
        <>
          <div className={cx("circle", isRunning ? "blink" : "")} />
          <p>
            {`0${Math.floor((time / 3600000) % 60)}`.slice(-2)} :{" "}
            {`0${Math.floor((time / 60000) % 60)}`.slice(-2)} :{" "}
            {`0${Math.floor((time / 1000) % 60)}`.slice(-2)}
          </p>
        </>
      )}
      <div className={cx("stop-button")} onClick={onQuit}>
        <StopCircle />
        <p>종료</p>
      </div>
    </div>
  );
};

export default Timer;
