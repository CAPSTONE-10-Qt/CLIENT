"use client";

import { useEffect } from "react";
import { getSession } from "next-auth/react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { isLoginState, profileInfoState } from "@store/auth";

const SessionState = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [profileInfo, setProfileInfo] = useRecoilState(profileInfoState);
  const resetProfile = useResetRecoilState(profileInfoState);
  const getServerSession = async () => {
    const session = await getSession();
    return Promise.resolve(session);
  };
  useEffect(() => {
    getServerSession()
      .then(res => {
        if (res) {
          setIsLogin(true);
          setProfileInfo({
            name: res?.user.name as string,
            image: res?.user.image as string,
          });
        } else {
          setIsLogin(false);
          resetProfile();
        }
      })
      .catch(err => console.log(err));
  }, []);
  return <></>;
};

export default SessionState;
