"use client";

import React from "react";
import { useRecoilValue } from "recoil";
import { themeState } from "@store/theme";

interface ThemeProvierProps {
  children: React.ReactNode;
}

export default function ThemeProvier({ children }: ThemeProvierProps) {
  const themeName = useRecoilValue(themeState);
  return <div className={`theme-${themeName}`}>{children}</div>;
}
