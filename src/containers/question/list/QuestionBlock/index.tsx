"use client";

import { useRouter } from "next/navigation";
import RoundButton from "@components/RoundButton";
import Pin from "@components/Pin";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const QuestionBlock = ({
  id,
  title,
  questionText,
  subjectText,
  score,
  pin,
  again,
}: QuestionPreviewType) => {
  const router = useRouter();
  return (
    <div
      className={cx("container")}
      onClick={() => router.push(`/question/detail/${id}`)}
    >
      <div className={cx("flex")}>
        <div>
          <RoundButton
            text={subjectText}
            state={false}
            className='small-button'
          />
          <RoundButton text='' state={false} score={score} />
          {!!again && (
            <RoundButton text='재답변' state={true} className='small-button' />
          )}
        </div>
        <Pin id={Number(id)} isTrue={!!pin} />
      </div>
      <h1>{questionText}</h1>
      <p>{title}</p>
    </div>
  );
};

export default QuestionBlock;
