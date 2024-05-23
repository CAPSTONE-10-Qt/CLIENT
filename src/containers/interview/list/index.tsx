"use client";

import InterviewBlock from "./InterviewBlock";
import SortBar from "./SortBar";

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
      <div className={cx("block-wrapper")}>
        {isLoading
          ? null
          : list.map((el: InterviewPreviewType) => (
              <InterviewBlock {...el} key={el.id} />
            ))}
      </div>
    </div>
  );
};

export default InterviewListContainer;

const mock_data: InterviewPreviewType[] = [
  {
    subjectText: "OS",
    startDateTime: "2024-3-10 18:23",
    endDateTime: "2024-3-10 17:22",
    totalTime: 680,
    title: "2024.03.29. 모의 면접 2",
    score: 1,
    id: 2,
    questionNum: 10,
  },
  {
    subjectText: "OS",
    startDateTime: "2024-3-10 18:23",
    endDateTime: "2024-3-10 17:22",
    totalTime: 3880,
    title: "2024.03.29. 모의 면접 1",
    score: 100,
    id: 1,
    questionNum: 20,
  },
  {
    subjectText: "OS",
    startDateTime: "2024-3-10 18:23",
    endDateTime: "2024-3-10 17:22",
    totalTime: 680,
    title: "2024.03.29. 모의 면접 2",
    score: 1,
    id: 3,
    questionNum: 10,
  },
  {
    subjectText: "OS",
    startDateTime: "2024-3-10 18:23",
    endDateTime: "2024-3-10 17:22",
    totalTime: 3880,
    title: "2024.03.29. 모의 면접 1",
    score: 100,
    id: 4,
    questionNum: 20,
  },
  {
    subjectText: "OS",
    startDateTime: "2024-3-10 18:23",
    endDateTime: "2024-3-10 17:22",
    totalTime: 3880,
    title: "2024.03.29. 모의 면접 1",
    score: 100,
    id: 5,
    questionNum: 20,
  },
];
