import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const ErrorContainer = () => {
  return (
    <div className={cx("container")}>
      <h1>서버 오류가 발생했습니다.</h1>
      <div />
      <p>새로고침 하거나 잠시 후 다시 시도해주세요.</p>
    </div>
  );
};

export default ErrorContainer;
