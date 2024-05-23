"use client";

import { useRecoilState } from "recoil";
import { questionFilterState } from "@store/interview";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const FilterTab = () => {
  const [filter, setFilter] = useRecoilState(questionFilterState);
  return (
    <div className={cx("container")}>
      {["전체 질문", "재답변한 질문", "즐겨찾기한 질문"].map((el, idx) => (
        <div
          className={cx("rect", idx + 1 === filter.sort ? "clicked" : "")}
          onClick={() => setFilter({ ...filter, sort: idx + 1 })}
          key={idx}
        >
          <p>{el}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterTab;
