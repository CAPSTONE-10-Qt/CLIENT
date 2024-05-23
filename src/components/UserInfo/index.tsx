"use client";

import { useRecoilValue } from "recoil";
import { profileInfoState } from "@store/auth";
import { useRouter } from "next/navigation";

import { DefaultProfile } from "@svgs/.";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

type Props = {
  isNav?: boolean;
  profile?: "interviewer" | "user";
};
const UserInfo = ({ isNav, profile }: Props) => {
  const router = useRouter();

  // 로그인 시 recoil로 이름과 프로필 사진 url 저장
  const { username, profileImage } = useRecoilValue(profileInfoState);

  return (
    <div
      className={cx(
        "container",
        isNav ? "clickable" : null,
        profile ? profile : "",
      )}
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
        {profile ? (
          <span>{profile === "interviewer" ? "면접관" : username}</span>
        ) : (
          <>
            <span>{username}</span>
            <span>{" 님"}</span>
          </>
        )}
      </span>
    </div>
  );
};

export default UserInfo;
