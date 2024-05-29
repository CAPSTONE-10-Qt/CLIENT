"use client";

import { useSession } from "next-auth/react";

import { Github, Mail } from "@svgs/index";
import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const InfoTab = () => {
  const { data } = useSession();
  console.log(data);
  return (
    <div className={cx("container")}>
      <h1>내 정보</h1>
      <div className={cx("sub-title")}>
        <h3>계정 정보</h3>
        <p>로그인한 계정 정보</p>
      </div>
      {data && (
        <div className={cx("box")}>
          <div className={cx("img-circle")}>
            <img
              src={data.user.image}
              alt={data.user.name + " profile image"}
            />
          </div>
          <div className={cx("text-container")}>
            <div>
              <b>{data.user.name}</b>
              <i>{data.user.userId}</i>
              <Github />
            </div>
            <div>
              <Mail />
              <p>{data.user.email}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoTab;
