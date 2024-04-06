import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const NotFoundContainer = () => {
  return (
    <div className={cx("container")}>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <div />
      <p>상단 메뉴를 이용하여 올바른 경로로 접근해주세요.</p>
    </div>
  );
};

export default NotFoundContainer;
