import Table from "@components/Table";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const Summary = ({
  questionList,
  questionNum,
  startDateTime,
  endDateTime,
  totalTime,
  score,
  textScore,
  otherScore,
  mumblePercent,
  silentPercent,
  facePositive,
  faceNeutral,
  faceNegative,
  otherFeedback,
}: InterviewDetailType) => {
  return (
    <div className={cx("container")}>
      <h1>종합 결과 요약</h1>
      <div className={cx("sub-title")}>
        <p>총점</p>
        <h3>{score + "점"}</h3>
      </div>
      <div className={cx("sub-title")}>
        <p>소요시간</p>
        <span>
          <b>시작</b>
          {` ${startDateTime.split(" ")[1]} - `}
          <b>종료</b>
          {` ${endDateTime.split(" ")[1]}`}
        </span>
      </div>
      <Table
        type='time'
        array={[totalTime, ...questionList.map(el => el.time)]}
      />
      <div className={cx("sub-title")}>
        <p>질문별 채점표</p>
      </div>
      <Table
        type='score'
        array={[questionNum, ...questionList.map(el => el.score)]}
      />
      <div className={cx("sub-title")}>
        <p>비언어적 표현 평가</p>
      </div>
      <Table
        type='graph'
        array={[
          mumblePercent,
          silentPercent,
          [facePositive, faceNeutral, faceNegative],
        ]}
      />
      <div className={cx("sub-title")}>
        <p>총평</p>
      </div>
      <div className={cx("quote")}>
        총점&nbsp;<b>{score + "점"}</b>&nbsp;= 답변 정확도&nbsp;
        <b>{textScore + "점"}</b>&nbsp;(70점 만점) + 비언어적 표현 평가&nbsp;
        <b>{otherScore + "점"}</b>&nbsp;(30점 만점)
      </div>
      <p className={cx("feedback")}>{otherFeedback}</p>
    </div>
  );
};

export default Summary;
