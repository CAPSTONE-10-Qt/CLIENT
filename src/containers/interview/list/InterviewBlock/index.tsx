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
  time,
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
      <p>{`${startDateTime.split(" ")[1]}~${
        endDateTime.split(" ")[1]
      } (${Math.round(time / 60)}m ${time % 60}s)`}</p>
      <div className={cx("flex")}>
        <RoundButton text={subjectText} state={false} />
        <span>{score + "점"}</span>
      </div>
    </div>
  );
};

export default InterviewBlock;
