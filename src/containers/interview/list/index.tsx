"use client";

import InterviewBlock from "./InterviewBlock";
import SortBar from "./SortBar";
import Loader from "@components/Loader";

import { useInterviewList } from "@service/hooks/interviewAfter";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const InterviewListContainer = () => {
  const { list, isLoading } = useInterviewList();
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <h1>모의 면접 기록</h1>
        <SortBar />
      </div>
      <p>{list ? `총 ${list.length}개의 면접` : " "}</p>
      {isLoading ? (
        <Loader height='calc(100vh - 400px)' />
      ) : list && list.length ? (
        <div className={cx("block-wrapper")}>
          {list.map((el: InterviewPreviewType) => (
            <InterviewBlock {...el} key={el.id} />
          ))}
        </div>
      ) : (
        <p className={cx("plain-text")}>아직 모의 면접 기록이 없습니다.</p>
      )}
    </div>
  );
};

export default InterviewListContainer;
