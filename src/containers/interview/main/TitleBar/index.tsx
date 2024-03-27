"use client";

import { useRecoilValue } from "recoil";
import { interviewDataState } from "@store/interview";
import RoundButton from "@components/RoundButton";
import Timer from "../Timer";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const TitleBar = () => {
  const { subjectText } = useRecoilValue(interviewDataState);
  return (
    <div className={cx("titlebar-container")}>
      <div className={cx("inner")}>
        <h1>
          {"2024. 03. 01. 모의 면접 1" +
            (location.href.includes("question") ? " #2" : "")}
        </h1>
        <RoundButton text={subjectText} state={false} initLineHeight={true} />
      </div>
      <Timer />
    </div>
  );
};

export default TitleBar;
