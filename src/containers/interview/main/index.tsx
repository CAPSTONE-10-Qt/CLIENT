import TitleBar from "./TitleBar";
import WebCam from "./WebCam";
import InfoSection from "./InfoSection";
import Question from "./Question";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const InterviewMainContainer = () => {
  return (
    <div className={cx("container")}>
      <TitleBar />
      <div className={cx("inner")}>
        <InfoSection />
        <WebCam />
      </div>
      <Question />
    </div>
  );
};

export default InterviewMainContainer;
