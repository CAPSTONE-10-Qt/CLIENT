"use client";

import { useRecoilValue } from "recoil";
import { themeState } from "@store/theme";

export default function Home() {
  const theme = useRecoilValue(themeState);
  return (
    <div className='theme'>
      <h1>{theme}</h1>
      <p>{theme}</p>
    </div>
  );
}
