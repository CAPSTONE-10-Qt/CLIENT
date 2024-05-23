"use client";

import { useState } from "react";
import { useRecoilState } from "recoil";
import { questionFilterState } from "@store/interview";
import useModal from "@utils/hooks/useModal";

import { ArrowDown } from "@svgs/.";
import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const list: (CSSubjectType | "ALL")[] = [
  "ALL",
  "OS",
  "CA",
  "DS",
  "NW",
  "DB",
  "SE",
];
const Dropdown = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { buttonRef, modalRef } = useModal(isOpen, setOpen);
  const [filter, setFilter] = useRecoilState(questionFilterState);
  const onClick = (el: CSSubjectType | "ALL") => {
    setOpen(false);
    setFilter({ ...filter, subjectText: el });
  };
  return (
    <div className={cx("container")}>
      <div
        className={cx("select-box", isOpen ? "open" : "")}
        ref={buttonRef}
        onClick={() => setOpen(!isOpen)}
      >
        <p>{filter.subjectText}</p>
        <ArrowDown />
      </div>
      {isOpen && (
        <div className={cx("drop-down")} ref={modalRef}>
          {list.map(el => (
            <div
              className={cx(filter.subjectText === el ? "selected" : "")}
              onClick={() => onClick(el)}
              key={el}
            >
              {el}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
