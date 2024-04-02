"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { isLoginState } from "@store/auth";

const usePin = (id: number, isTrue: boolean) => {
  const router = useRouter();
  const isLogin = useRecoilValue<boolean>(isLoginState);
  const [state, setState] = useState<boolean>(isTrue);
  const [trigger, setTrigger] = useState<number>(0);
  const toggle = () => setTrigger(trigger + 1);
  // const { getPickList } = useGetPick();

  useEffect(() => {
    // getPickList();
  }, []);

  useEffect(() => {
    setState(isTrue);
  }, [isTrue]);

  useEffect(() => {
    if (trigger !== 0) {
      if (isLogin) {
        setState(!state);
        if (state === true) {
          //   pickDeletePick(id)
          //     .then(res => {
          //       getPickList();
          //       setState(false);
          //     })
          //     .catch();
        } else {
          //   pickPostPick(id)
          //     .then(res => {
          //       getPickList();
          //       setState(true);
          //     })
          //     .catch();
        }
      } else {
        // alert
      }
    }
  }, [trigger]);

  return { state, toggle };
};

export default usePin;
