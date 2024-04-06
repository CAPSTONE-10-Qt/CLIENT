"use client";

import React from "react";

import { GithubLogo, GoogleLogo } from "../../../../public/svgs";
import styles from "../index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

type Props = {
  type: "github" | "google";
};
const LoginButton = ({ type }: Props) => {
  const onLogin = () => {};
  return (
    <div className={cx("login-button-rect")} onClick={onLogin}>
      {type === "github" ? <GithubLogo /> : <GoogleLogo />}
      <p>{type === "github" ? "GitHub로 시작하기" : "Google로 시작하기"}</p>
      <div />
    </div>
  );
};

export default LoginButton;
