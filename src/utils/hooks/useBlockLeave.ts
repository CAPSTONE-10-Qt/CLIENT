"use client";

import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { blockQuitInterview } from "@utils/alerts/interview";
import { useRecoilValue } from "recoil";
import { interviewAllowState } from "./../../store/interview";

const useBlockLeave = (
  goBack: () => void,
  isRunning: boolean,
  setIsRunning: (value: boolean) => void,
) => {
  const router = useRouter();
  const { quit, done } = useRecoilValue(interviewAllowState);

  // 새로고침 감지
  const handleBeforeUnload = useCallback(
    (e: BeforeUnloadEvent) => {
      setIsRunning(false);
      e.preventDefault();
      e.returnValue = true;
    },
    [isRunning],
  );

  // 뒤로가기 감지
  const firstBack = useRef(true);
  const handlePopState = useCallback(() => {
    if (quit || done) return;
    history.pushState(null, "", location.href);
    setIsRunning(false);
    blockQuitInterview(() => setIsRunning(true));
  }, []);
  useEffect(() => {
    if (firstBack) {
      history.pushState(null, "", location.href);
      firstBack.current = false;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [handleBeforeUnload, handlePopState, router, isRunning]);

  // 페이지 이동 감지
  useEffect(() => {
    if (quit || done) return;
    const originalPush = router.push;
    const newPush = (
      href: string,
      options?: NavigateOptions | undefined,
    ): void => {
      setIsRunning(false);
      blockQuitInterview(() => setIsRunning(true));
    };
    router.push = newPush;
    return () => {
      router.push = originalPush;
    };
  }, [router, quit, done]);
};

export default useBlockLeave;
