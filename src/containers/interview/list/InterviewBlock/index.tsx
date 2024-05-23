"use client";

import { useRouter } from "next/navigation";
import RoundButton from "@components/RoundButton";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const InterviewBlock = ({
  subjectText,
  startDateTime,
  endDateTime,
  totalTime,
  title,
  score,
  id,
  questionNum,
}: InterviewPreviewType) => {
  const router = useRouter();
  return (
    <div
      className={cx("container")}
      onClick={() => router.push(`/interview/detail/${id}`)}
    >
      <h1>{title}</h1>
      <p>{`${new Date(startDateTime).toLocaleTimeString("ko", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })}~${new Date(endDateTime).toLocaleTimeString("ko", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })} (${Math.floor(totalTime / 60)}m ${totalTime % 60}s)`}</p>
      <div className={cx("flex")}>
        <RoundButton text={subjectText} state={false} />
        <span>{score + "점"}</span>
      </div>
    </div>
  );
};

export default InterviewBlock;
