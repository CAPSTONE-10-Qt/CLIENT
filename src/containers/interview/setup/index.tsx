import SetupForm from "./SetupForm";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const InterviewSetupContainer = () => {
  return (
    <div className={cx("container")}>
      <SetupForm />
    </div>
  );
};

export default InterviewSetupContainer;
