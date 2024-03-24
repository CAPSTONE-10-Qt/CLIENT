"use client";

import { useRecoilValue } from "recoil";
import { profileInfoState } from "@store/auth";
import { useRouter } from "next/navigation";

import { DefaultProfile } from "../../../public/svgs";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

type Props = {
  isNav?: boolean;
};
const UserInfo = ({ isNav }: Props) => {
  const router = useRouter();

  // 로그인 시 recoil로 이름과 프로필 사진 url 저장
  const { username, profileImage } = useRecoilValue(profileInfoState);

  return (
    <div
      className={cx("container", isNav ? "clickable" : null)}
      onClick={() => (isNav ? router.push("/my") : undefined)}
    >
      <div className={cx("image-circle")}>
        {profileImage ? (
          <img src={profileImage} alt={username + " profile image"} />
        ) : (
          <DefaultProfile />
        )}
      </div>
      <span className={cx("name")}>
        <span>{username}</span>
        <span>{" 님"}</span>
      </span>
    </div>
  );
};

export default UserInfo;