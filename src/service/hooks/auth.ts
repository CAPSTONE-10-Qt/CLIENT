"use client";

import { useRecoilState, useResetRecoilState } from "recoil";
import { isLoginState, profileInfoState } from "@store/auth";

import { getSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

export const useLogin = (type: "github" | "google") => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [profileInfo, setProfileInfo] = useRecoilState(profileInfoState);
  const getServerSession = async () => {
    const session = await getSession();
    return Promise.resolve(session);
  };
  const login = async () => {
    await signIn(type, { callbackUrl: "/" });
    await getServerSession()
      .then(res => {
        if (res) {
          setIsLogin(true);
          setProfileInfo({
            name: res?.user.name as string,
            image: res?.user.image as string,
          });
        }
      })
      .catch(err => console.log(err));
  };
  return login;
};

export const useLogout = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const resetProfile = useResetRecoilState(profileInfoState);
  const logout = () => {
    signOut({ callbackUrl: "/" });
    setIsLogin(false);
    resetProfile();
  };
  return logout;
};
