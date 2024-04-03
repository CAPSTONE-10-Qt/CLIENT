import Link from "next/link";
import UserInfo from "@components/UserInfo";
import { Play } from "../../../public/svgs";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

type Props = {
  type: "question" | "answer" | "solution";
  text: string;
  solution?: string;
  questionNumber?: number;
  questionId?: number;
};

const TextBox = ({
  type,
  text,
  solution,
  questionNumber,
  questionId,
}: Props) => {
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
        <div className={cx("profile")}>
          <UserInfo profile={type === "question" ? "interviewer" : "user"} />
        </div>
      )}
      <div className={cx("paragraph-container")}>
        {type === "solution" && <b>[예시 답안]</b>}
        {text.includes("\n") ? (
          text.split("\n").map((line: string, idx: number) => (
            <p key={idx}>
              {line}
              <br />
            </p>
          ))
        ) : (
          <p>{text}</p>
        )}
        {type === "solution" && <b className={cx("b-2")}>[첨삭]</b>}
        {solution &&
          (solution.includes("\n") ? (
            solution.split("\n").map((line: string, idx: number) => (
              <p key={idx}>
                {line}
                <br />
              </p>
            ))
          ) : (
            <p>{solution}</p>
          ))}
      </div>
      {questionId !== undefined && (
        <Link href={`/question/${questionId}`} className={cx("button")}>
          <Play />
          <p>재답변</p>
        </Link>
      )}
    </div>
  );
};

export default TextBox;
