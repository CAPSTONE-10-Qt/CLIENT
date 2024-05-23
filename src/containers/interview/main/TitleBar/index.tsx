"use client";

import { useRecoilValue } from "recoil";
import { interviewDataState } from "@store/interview";
import RoundButton from "@components/RoundButton";
import Timer from "../Timer";

import { MicTrue, CamFalse, CamTrue } from "@svgs/.";
import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const TitleBar = ({ item }: { item?: InterviewDetailType }) => {
  const { title, subjectText } = useRecoilValue(interviewDataState);
  return (
    <div className={cx("titlebar-container")}>
      <div className={cx("inner", item ? "result" : "")}>
        <h1>{item ? item.title : title}</h1>
        <div>
          <RoundButton
            text={item ? item.subjectText : subjectText}
            state={false}
            initLineHeight={true}
          />
          {location.href.includes("question") && (
            <RoundButton text='재답변' state={true} initLineHeight={true} />
          )}
          {item && (
            <div className={cx("icon-flex")}>
              <MicTrue />
              {item.onlyVoice ? <CamFalse /> : <CamTrue />}
            </div>
          )}
        </div>
      </div>
      {!item && <Timer />}
    </div>
  );
};

export default TitleBar;
