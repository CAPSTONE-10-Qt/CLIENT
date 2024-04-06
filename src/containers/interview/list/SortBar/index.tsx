"use client";

import React from "react";
import { useRecoilState } from "recoil";
import { interviewSortState } from "@store/interview";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const SortBar = () => {
  const [sort, setSort] = useRecoilState(interviewSortState);
  return (
    <div className={cx("container")}>
      {["최신순", "점수 높은순", "점수 낮은순"].map((el, idx) => (
        <React.Fragment key={idx}>
          <p
            className={cx(
              "text",
              idx > 0 ? "wide" : "",
              sort === idx + 1 ? "clicked" : "",
            )}
            onClick={() => setSort(idx + 1)}
            content={el}
          >
            {el}
          </p>
          {idx !== 2 && <div className={cx("border")} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SortBar;
