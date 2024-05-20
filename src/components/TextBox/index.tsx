"use client";

import { useRouter } from "next/navigation";
import UserInfo from "@components/UserInfo";
import RoundButton from "@components/RoundButton";
import { Play } from "@svgs/.";
import { patchQuestionStart } from "@service/api/interviewDuring";
import { useRecoilState } from "recoil";
import { interviewDataState } from "@store/interview";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

type Props = {
  type: "question" | "answer" | "solution";
  text: string;
  solution?: string;
  isOnlySolution?: boolean;
  questionNumber?: number;
  questionId?: number;
  beforeClick?: () => void;
  score?: number;
  isRe?: boolean;
};

const TextBox = ({
  type,
  text,
  solution,
  isOnlySolution,
  questionNumber,
  questionId,
  beforeClick,
  score,
  isRe,
}: Props) => {
  const router = useRouter();
  const [interview, setInterview] = useRecoilState(interviewDataState);
  const onClick = () => {
    beforeClick && beforeClick();
    patchQuestionStart(questionId as number)
      .then(res => {
        console.log(res);
        setInterview({ ...interview, reId: res.data.data.id });
        router.push(`/question/${questionId}`);
      })
      .catch(err => console.log(err));
  };
  return (
    <div
      className={cx(
        "container",
        type,
        questionNumber !== undefined ? "answering" : "",
      )}
    >
      {questionNumber !== undefined && (
        <div className={cx("number")}>{`❔ Question ${questionNumber}`}</div>
      )}
      {type !== "solution" && questionNumber === undefined && (
        <div className={cx("profile", score === undefined ? "end" : "")}>
          {score !== undefined && (
            <div>
              <RoundButton
                text={isRe ? "재답변" : "최초 답변"}
                state={false}
                className='small-button'
              />
              <RoundButton text='' state={false} score={score} />
            </div>
          )}
          <UserInfo profile={type === "question" ? "interviewer" : "user"} />
        </div>
      )}
      <div className={cx("paragraph-container")}>
        {type === "solution" && (
          <b>{isOnlySolution ? "[첨삭]" : "[예시 답안]"}</b>
        )}
        {text.includes("\n") ? (
          text.split("\n").map(
            (line: string, idx: number) =>
              line && (
                <p key={idx}>
                  {line}
                  <br />
                </p>
              ),
          )
        ) : (
          <p>{text}</p>
        )}
        {solution && <b className={cx("b-2")}>[첨삭]</b>}
        {solution &&
          (solution.includes("\n") ? (
            solution.split("\n").map(
              (line: string, idx: number) =>
                line && (
                  <p key={idx}>
                    {line}
                    <br />
                  </p>
                ),
            )
          ) : (
            <p>{solution}</p>
          ))}
      </div>
      {questionId !== undefined && (
        <div onClick={onClick} className={cx("button")}>
          <Play />
          <p>재답변</p>
        </div>
      )}
    </div>
  );
};

export default TextBox;
