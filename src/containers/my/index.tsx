"use client";

import { useState } from "react";
import Menu from "./Menu";
import SettingTab from "./SettingTab";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const MyContainer = () => {
  const [tab, setTab] = useState<number>(0);
  return (
    <div className={cx("container")}>
      <Menu tab={tab} setTab={setTab} />
      {tab === 0 ? <SettingTab /> : null}
    </div>
  );
};

export default MyContainer;
