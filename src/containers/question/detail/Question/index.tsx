"use client";

import { useRecoilState } from "recoil";
import { interviewDataState } from "@store/interview";

import RoundButton from "@components/RoundButton";
import Pin from "@components/Pin";
import TextBox from "@components/TextBox";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const Question = ({
  id,
  title,
  questionNum,
  subjectText,
  score,
  again,
  pin,
  questionText,
}: QuestionDetailType) => {
  const [interview, setInterview] = useRecoilState(interviewDataState);
  const onClick = () => {
    setInterview({
      id: id,
      subjectText: subjectText,
      questionNum: 1,
      onlyVoice: true,
      startDateTime: new Date().toISOString(),
      title: `${title} #${questionNum}`,
      questionList: [
        ...new Array(questionNum - 1).map((el, idx) => {
          return { id: idx, questionText: "" };
        }),
        {
          id: 0,
          questionText: questionText,
        },
      ],
      currentIndex: questionNum - 1,
      isMicOn: false,
      isSpeakerOn: true,
    });
  };
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <h3>{title + " #" + questionNum}</h3>
        <div>
          <div>
            <RoundButton
              text={subjectText}
              state={false}
              className='small-button'
            />
            <RoundButton text='' state={false} score={score} />
            {again && (
              <RoundButton
                text='재답변'
                state={true}
                className='small-button'
              />
            )}
          </div>
          <Pin id={id} isTrue={!!pin} />
        </div>
      </div>
      <TextBox
        type='question'
        text={questionText}
        questionId={id}
        beforeClick={onClick}
      />
    </div>
  );
};

export default Question;
