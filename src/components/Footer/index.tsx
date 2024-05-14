import { LogoText, Mail, Github, Help } from "@svgs/.";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const Footer = () => {
  return (
    <div className={cx("container")}>
      <LogoText />
      <div className={cx("inner")}>
        <a href='mailto:529539@ewha.ac.kr' className={cx("el")}>
          <Mail />
          이메일
        </a>
        <a
          href='https://github.com/TEAM-ITERVIEW'
          target='_blank'
          className={cx("el")}
        >
          <Github />
          GitHub
        </a>
        <a href='/' className={cx("el")}>
          <Help />
          개인정보처리방침
        </a>
      </div>
    </div>
  );
};

export default Footer;
