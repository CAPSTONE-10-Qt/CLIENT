"use client";

import { Star } from "../../../public/svgs";
import usePin from "./usePin";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const Pin = ({ id, isTrue }: { id: number; isTrue: boolean }) => {
  const { state, toggle } = usePin(id, isTrue);
  const onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    toggle();
  };
  return (
    <div className={cx("container")} onClick={onClick}>
      <Star fill={state ? "var(--color-theme-main)" : "none"} />
    </div>
  );
};

export default Pin;
