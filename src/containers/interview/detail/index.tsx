import TitleBar from "../main/TitleBar";
import Summary from "./Summary";
import QuestionList from "./QuestionList";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const InterviewDetailContainer = ({ data }: { data: InterviewDetailType }) => {
  return (
    <div className={cx("container")}>
      <h1>모의 면접 결과</h1>
      <TitleBar item={data} />
      <Summary {...data} />
      <QuestionList {...data} />
    </div>
  );
};

export default InterviewDetailContainer;
