import TitleBar from "./TitleBar";
import WebCam from "./WebCam";
import ControlSection from "./ControlSection";
import Question from "./Question";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const InterviewMainContainer = () => {
  return (
    <div className={cx("container")}>
      <TitleBar />
      <div className={cx("inner")}>
        <ControlSection />
        <WebCam />
      </div>
      <Question />
    </div>
  );
};

export default InterviewMainContainer;
