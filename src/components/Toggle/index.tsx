"use client";

import { useRecoilState } from "recoil";
import { questionFilterState } from "@store/interview";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const Toggle = ({ type }: { type: "question" }) => {
  const [filter, setFilter] = useRecoilState(questionFilterState);
  return (
    <div
      className={cx(
        "container",
        type === "question" && filter.onlyWrong ? "on" : "off",
      )}
      onClick={() =>
        type === "question"
          ? setFilter({ ...filter, onlyWrong: !filter.onlyWrong })
          : undefined
      }
    >
      <div />
    </div>
  );
};

export default Toggle;
