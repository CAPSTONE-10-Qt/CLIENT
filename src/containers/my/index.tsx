"use client";

import React from "react";
import { useTheme } from "next-themes";

const MyContainer = () => {
  const { setTheme } = useTheme();
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      {["pink", "blue"].map(i => (
        <button key={i} onClick={() => setTheme(i)}>
          {i}
        </button>
      ))}
    </div>
  );
};

export default MyContainer;
