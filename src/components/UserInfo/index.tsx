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
  const { name, image } = useRecoilValue(profileInfoState);
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
        {image ? (
          <img src={image} alt={name + " profile image"} />
        ) : (
          <DefaultProfile />
        )}
      </div>
      <span className={cx("name")}>
        {profile ? (
          <span>{profile === "interviewer" ? "면접관" : name}</span>
        ) : (
          <>
            <span>{name}</span>
            <span>{" 님"}</span>
          </>
        )}
      </span>
    </div>
  );
};

export default UserInfo;
