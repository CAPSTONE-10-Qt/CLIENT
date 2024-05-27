"use client";

import React, { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

type SessionData = {
  Authorization: string;
  RefreshToken: string;
  expires: string;
};
type SessionType = {
  data: SessionData | any;
  status: string;
  update: any;
};
export const AuthroizationHeader = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { status, data: session }: SessionType = useSession();
  const isLogin = !!session && status === "authenticated";
  const accesstoken = isLogin ? session.Authorization : "";
  return <>{children}</>;
};
