"use client";

import { useRef } from "react";
import Link from "next/link";
import { introText } from "@utils/constants/introTutorialText";
import { LogoText, LogoBig, LoogSmall } from "../../../../public/svgs";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const Introduction = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const { subtitle, title, firstText, text, button } = introText;
  return (
    <div className={cx("container")} ref={introRef}>
      <div className={cx("box")}>
        <div>
          <h3>{subtitle}</h3>
          <h1>{title}</h1>
        </div>
        <LogoText />
        <div>
          <p className={cx("first")}>{firstText}</p>
          <p>{text}</p>
        </div>
        <div className={cx("button-container")}>
          <Link href='/interview/setup'>{button[0]}</Link>
          <div
            onClick={() =>
              window.scroll({
                left: 0,
                top: introRef.current!.offsetHeight + 180,
                behavior: "smooth",
              })
            }
          >
            {button[1]}
          </div>
        </div>
      </div>
      <div className={cx("logo")}>
        <LogoBig />
        <LoogSmall />
      </div>
    </div>
  );
};

export default Introduction;
