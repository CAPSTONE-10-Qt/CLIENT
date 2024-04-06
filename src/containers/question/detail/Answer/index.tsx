"use client";

import { useRouter } from "next/navigation";

import TextBox from "@components/TextBox";
import RectButton from "@components/RectButton";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const Answer = ({
  startDateTime,
  time,
  text,
  score,
  sampleAnswer,
  feedbackText,
  again,
  againList,
}: QuestionDetailType) => {
  const router = useRouter();
  return (
    <>
      <div className={cx("container")}>
        {[{ score, time, startDateTime, feedbackText, text }, ...againList].map(
          (item, idx) => (
            <div className={cx("section")}>
              <div>
                <h5>{idx === 0 ? "최초 답변" : `재답변 ${idx}`}</h5>
                <p>{`${item.startDateTime} (${item.time}s)`}</p>
              </div>
              <TextBox
                type='answer'
                text={item.text}
                score={item.score}
                isRe={idx !== 0}
              />
              {idx === 0 ? (
                <TextBox
                  type='solution'
                  text={sampleAnswer}
                  solution={feedbackText}
                />
              ) : (
                <TextBox
                  type='solution'
                  text={item.feedbackText}
                  isOnlySolution={true}
                />
              )}
            </div>
          ),
        )}
      </div>
      <RectButton
        text='학습 노트로 돌아가기'
        onClick={() => router.back()}
        isBack={true}
      />
    </>
  );
};

export default Answer;
