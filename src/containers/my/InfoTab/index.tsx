"use client";

import { useSession } from "next-auth/react";
import { useLogout } from "@service/hooks/auth";
import RoundButton from "@components/RoundButton";

import { Github, Mail } from "@svgs/index";
import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const InfoTab = () => {
  const { data } = useSession();
  const logout = useLogout();
  return (
    <div className={cx("container")}>
      <h1>내 정보</h1>
      <div className={cx("sub-title")}>
        <h3>계정 정보</h3>
        <RoundButton
          text='로그아웃'
          state={false}
          className='logout-btn'
          onClick={logout}
        />
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
