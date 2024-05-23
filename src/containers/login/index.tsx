import LoginButton from "./LoginButton";
import { LogoImage } from "@svgs/.";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const LoginContainer = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("image-rect")}>
        <LogoImage />
      </div>
      <div className={cx("inner")}>
        <h1>빠른 시작</h1>
        <LoginButton type='github' />
        <LoginButton type='google' />
      </div>
    </div>
  );
};

export default LoginContainer;
