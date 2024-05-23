"use client";

import { startTransition } from "react";
import { useRouter } from "next/navigation";
import RoundButton from "@components/RoundButton";
import Pin from "@components/Pin";
import TextBox from "@components/TextBox";
import RectButton from "@components/RectButton";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const QuestionList = ({ questionList }: InterviewDetailType) => {
  const router = useRouter();
  return (
    <>
      <div className={cx("container")}>
        <h1>질문별 채점 및 첨삭</h1>
        {questionList.map((item, idx) => (
          <div className={cx("flex")} key={idx}>
            <div className={cx("question-header")}>
              <div>
                <p>{`❔Question ${idx + 1}`}</p>
                <RoundButton text='' state={false} score={item.score} />
              </div>
              <Pin id={item.id} isTrue={!!item.pin} />
            </div>
            <RoundButton text='' state={false} score={item.score} />
            <TextBox type='question' text={item.questionText} />
            <TextBox type='answer' text={item.text} />
            <TextBox
              type='solution'
              text={item.sampleAnswer}
              solution={item.feedbackText}
            />
          </div>
        ))}
      </div>
      <RectButton
        text='학습 노트 바로가기'
        onClick={() =>
          startTransition(() => {
            router.push(`/question/list`);
            router.refresh();
          })
        }
      />
    </>
  );
};

export default QuestionList;
