"use client";

import { useState, useEffect } from "react";

import { useRecoilValue } from "recoil";
import { isLoginState } from "@store/auth";
import { useProfile } from "@service/hooks/auth";
import useDetectScroll from "./useDetectScroll";
import useModal from "@utils/hooks/useModal";

import { LogoText, Menu } from "@svgs/.";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import UserInfo from "@components/UserInfo";
import RoundButton from "@components/RoundButton";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const pathList: { id: number; path: string; text: string }[] = [
  {
    id: 0,
    path: "/interview/setup",
    text: "모의 면접",
  },
  {
    id: 1,
    path: "/interview/list",
    text: "면접 기록",
  },
  {
    id: 2,
    path: "/question/list",
    text: "학습 노트",
  },
];

const Header = () => {
  const isLogin = useRecoilValue(isLoginState);
  useProfile();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { visible, position } = useDetectScroll();
  const { buttonRef, modalRef } = useModal(isMobileMenuOpen, setMobileMenuOpen);

  const router = useRouter();
  useEffect(() => {
    const originalPush = router.push;
    const newPush = (
      href: string,
      options?: NavigateOptions | undefined,
    ): void => {
      setMobileMenuOpen(false);
      originalPush(href, options);
    };
    router.push = newPush;
    return () => {
      router.push = originalPush;
    };
  }, [router]);

  return (
    <>
      <div
        className={
          cx("container") +
          `${
            visible === false && position > 70
              ? " fade-out"
              : visible === true
                ? " fade-in"
                : ""
          }`
        }
      >
        <LogoText onClick={() => router.push("/")} />
        <div className={cx("inner")}>
          {pathList.map(el => (
            <Link href={el.path} key={el.id}>
              {el.text}
            </Link>
          ))}
          {isLogin ? (
            <UserInfo isNav={true} />
          ) : (
            <RoundButton
              text='로그인'
              state={true}
              onClick={() => router.push("/login")}
              className='btn'
            />
          )}
          <div ref={buttonRef}>
            <Menu
              cursor='pointer'
              className='header-menu-icon'
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className={cx("menu-container")} ref={modalRef}>
          {pathList.map(el => (
            <div
              className={cx(
                "menu-rect",
                window.location.pathname === el.path ? "active" : null,
              )}
              key={el.id}
              onClick={() => router.push(el.path)}
            >
              <p>{el.text}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
