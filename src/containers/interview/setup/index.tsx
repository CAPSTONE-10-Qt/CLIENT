import SetupForm from "./SetupForm";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const InterviewSetupContainer = () => {
  return (
    <div className={cx("container")}>
      <h1>모의 면접을 시작합니다.</h1>
      <SetupForm />
    </div>
  );
};

export default InterviewSetupContainer;
