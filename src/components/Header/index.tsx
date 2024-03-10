"use client";

import { useRecoilValue } from "recoil";
import { isLoginState } from "@store/auth";

import { LogoText } from "../../../public/svgs";
import Link from "next/link";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const Header = () => {
  const isLogin = useRecoilValue(isLoginState);
  return (
    <div className={cx("container")}>
      <LogoText width='140' />
      <div className={cx("inner")}>
        <Link href='/interview/setup'>모의 면접</Link>
        <Link href='/interview/list'>면접 기록</Link>
        <Link href='/question/list'>학습 노트</Link>
        {isLogin ? (
          <div></div>
        ) : (
          <Link href='/login' className={cx("btn")}>
            로그인
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
