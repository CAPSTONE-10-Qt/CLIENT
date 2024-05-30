import Link from "next/link";
import { tutorialText } from "@utils/constants/introTutorialText";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const Tutorial = () => {
  return (
    <div className={cx("container")}>
      {tutorialText.map((el, idx) => (
        <div className={cx(idx === 1 ? "left" : "")} key={idx}>
          <h5>{el.subtitle}</h5>
          <h3>{el.title}</h3>
          <p>{el.text}</p>
          <Link href={el.path}>{el.buttonText}</Link>
        </div>
      ))}
    </div>
  );
};

export default Tutorial;
