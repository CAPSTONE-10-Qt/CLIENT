"use client";

import { useTheme } from "next-themes";
import ColorBlock from "../ColorBlock";
import { colorBlockText } from "@utils/constants/colorBlockText";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const SettingTab = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className={cx("container")}>
      <h1>설정</h1>
      <div className={cx("sub-title")}>
        <h3>테마 컬러 변경</h3>
        <p>
          잇터뷰의 모든 페이지에서 사용되는 테마 컬러를 취향에 따라
          변경해보세요!
        </p>
      </div>
      <div className={cx("block-wrapper")}>
        {colorBlockText.map(item => (
          <ColorBlock
            {...item}
            onClick={() => setTheme(item.state)}
            current={theme === "system" ? "pink" : theme}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default SettingTab;
