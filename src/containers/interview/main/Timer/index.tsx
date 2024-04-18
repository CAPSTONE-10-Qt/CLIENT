"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useRecoilState, useResetRecoilState } from "recoil";
import { interviewDataState, interviewState } from "@store/interview";

import useInterval from "@utils/hooks/useInterval";
import useBlockLeave from "@utils/hooks/useBlockLeave";
import {
  autoStartInterview,
  confirmQuitInterview,
} from "@utils/alerts/interview";
import { deleteInterview } from "@service/api/interviewDuring";

import { StopCircle } from "../../../../../public/svgs";
import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const Timer = () => {
  const router = useRouter();
  const { id } = useParams();
  const [state, setState] = useRecoilState(interviewState);
  const { isRunning, quit, done } = state;
  const resetData = useResetRecoilState(interviewDataState);
  const resetState = useResetRecoilState(interviewState);

  const [time, setTime] = useState<number>(0);
  useInterval(() => {
    if (isRunning) setTime(time + 1000);
  }, 1000);

  const goBack = () =>
    deleteInterview(Number(id))
      .then(res => {
        resetData();
        router.push(
          location.href.includes("interview")
            ? "/interview/setup"
            : `/question/detail/${id}`,
        );
      })
      .catch(err => console.log(err));
  useEffect(() => {
    resetState();
    autoStartInterview(() => {
      setState({ ...state, isRunning: true, isFirst5: false });
    });
  }, []);
  useBlockLeave(goBack);

  const onQuit = () => {
    setState({ ...state, quit: true, isRunning: false });
    confirmQuitInterview(goBack, () =>
      setState({ ...state, quit: false, isRunning: true }),
    );
  };
  useEffect(() => {
    if (state.quit === true) setState({ ...state, isRunning: false });
  }, [state.quit]);

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
