import Introduction from "./Introduction";
import Tutorial from "./Tutorial";
import SessionState from "./SessionState";
import Footer from "@components/Footer";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const HomeContainer = () => {
  return (
    <>
      <div className={cx("container")}>
        <Introduction />
        <div className={cx("border")} />
        <Tutorial />
      </div>
      <Footer />
      <SessionState />
    </>
  );
};

export default HomeContainer;
