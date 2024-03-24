import Link from "next/link";
import UserInfo from "@components/UserInfo";
import { Play } from "../../../public/svgs";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

type Props = {
  type: "question" | "answer" | "solution";
  text: string;
  questionNumber?: number;
  questionId?: number;
};

const TextBox = ({ type, text, questionNumber, questionId }: Props) => {
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
        {text.split("\n") ? (
          text.split("\n").map((line: string, idx: number) => (
            <p key={idx}>
              {line}
              <br />
            </p>
          ))
        ) : (
          <p>{text}</p>
        )}
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
