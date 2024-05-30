"use client";

import Dropdown from "@components/Dropdown";
import QuestionBlock from "./QuestionBlock";
import FilterTab from "./FilterTab";
import Toggle from "@components/Toggle";
import Loader from "@components/Loader";

import { useQuestionList } from "@service/hooks/interviewAfter";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const QuestionListContainer = () => {
  const { list, isLoading } = useQuestionList();
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <h1>질문별 학습 노트</h1>
        <Dropdown />
      </div>
      <FilterTab />
      <div className={cx("top-info")}>
        <p>{list ? `총 ${list.length}개의 질문` : " "}</p>
        <div>
          <span>정답 질문 제외하고 보기</span>
          <Toggle type='question' />
        </div>
      </div>
      {isLoading ? (
        <Loader height='calc(100vh - 500px)' />
      ) : list && list.length ? (
        <div className={cx("block-wrapper")}>
          {list.map((el: QuestionPreviewType) => (
            <QuestionBlock {...el} key={el.id} />
          ))}
        </div>
      ) : (
        <p className={cx("plain-text")}>아직 학습 노트에 질문이 없습니다.</p>
      )}
    </div>
  );
};

export default QuestionListContainer;
