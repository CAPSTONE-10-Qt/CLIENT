"use client";

import React from "react";
import { notYetOAuth } from "@utils/alerts/auth";

import { GithubLogo, GoogleLogo } from "@svgs/.";
import styles from "../index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

type Props = {
  type: "github" | "google";
};
const LoginButton = ({ type }: Props) => {
  const onLogin = () => {
    if (type === "github") {
      window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/accounts`;
    } else notYetOAuth();
  };
  return (
    <div className={cx("login-button-rect")} onClick={onLogin}>
      {type === "github" ? <GithubLogo /> : <GoogleLogo />}
      <p>{type === "github" ? "GitHub로 시작하기" : "Google로 시작하기"}</p>
      <div />
    </div>
  );
};

export default LoginButton;
