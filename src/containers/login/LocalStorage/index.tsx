"use client";

import { useEffect, startTransition } from "react";
import { useRouter } from "next/navigation";

const LocalStorage = ({ data }: { data: any }) => {
  const router = useRouter();
  useEffect(() => {
    localStorage.setItem("accessToken", data.data.accessToken);
    window.location.href = "/";
  }, []);
  return <></>;
};

export default LocalStorage;
