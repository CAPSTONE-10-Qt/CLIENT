import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const Loader = ({ height }: { height?: string }) => {
  return (
    <div className={cx("container")} style={{ height: height || "100vh" }}>
      <div className={cx("loader")} />
    </div>
  );
};

export default Loader;
