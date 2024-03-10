"use client";

import React from "react";
import { useRecoilState } from "recoil";
import { themeState } from "@store/theme";

const MyContainer = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  return (
    <div>
      {["pink", "blue"].map(i => (
        <button key={i} onClick={() => setTheme(i)}>
          {i}
        </button>
      ))}
    </div>
  );
};

export default MyContainer;
