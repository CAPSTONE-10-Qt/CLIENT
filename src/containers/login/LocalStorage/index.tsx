"use client";

import { useEffect, startTransition } from "react";
import { useRouter } from "next/navigation";

const LocalStorage = ({ data }: { data: any }) => {
  const router = useRouter();
  useEffect(() => {
    localStorage.setItem("accessToken", data.data.accessToken);
    startTransition(() => {
      router.push(`/`);
      router.refresh();
    });
  }, []);
  return <></>;
};

export default LocalStorage;
