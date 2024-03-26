import { descriptionText } from "@utils/constants/descriptionText";
import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const Description = () => {
  return (
    <div className={cx("container")}>
      {descriptionText.map((item, idx) => (
        <div className={cx("paragraph")} key={idx}>
          <p>{item.icon}</p>
          <div>
            {item.paragraph.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
