"use client";

import styles from "./_styles/page.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

import Image from "next/image";
import Music from "/public/images/music.svg";

export default function Home() {
  return <div className={cx("main", "description")}></div>;
}
