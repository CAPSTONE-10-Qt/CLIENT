import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const LoadingContainer = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("loader")} />
    </div>
  );
};

export default LoadingContainer;
