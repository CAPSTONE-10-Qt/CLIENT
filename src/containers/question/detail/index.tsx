import Answer from "./Answer";
import Question from "./Question";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const QuestionDetailContainer = ({ data }: { data: QuestionDetailType }) => {
  return (
    <div className={cx("container")}>
      <h1>질문별 학습 노트</h1>
      <Question {...data} />
      <Answer {...data} />
    </div>
  );
};

export default QuestionDetailContainer;
