import Dropdown from "@components/Dropdown";
import QuestionBlock from "./QuestionBlock";
import FilterTab from "./FilterTab";
import Toggle from "@components/Toggle";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const QuestionListContainer = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <h1>질문별 학습 노트</h1>
        <Dropdown />
      </div>
      <FilterTab />
      <div className={cx("top-info")}>
        <p>{`총 ${data.length}개의 질문`}</p>
        <div>
          <span>정답 질문 제외하고 보기</span>
          <Toggle type='question' />
        </div>
      </div>
      <div className={cx("block-wrapper")}>
        {data && data.map(el => <QuestionBlock {...el} key={el.id} />)}
      </div>
    </div>
  );
};

export default QuestionListContainer;

const data: QuestionPreviewType[] = [
  {
    id: 1,
    questionText:
      "Round Robin 스케쥴링에 대해 설명해주세요. Round Robin 스케쥴링에 대해 설명해주세요. Round Robin 스케쥴링에 대해 설명해주세요. Round Robin 스케쥴링에 대해 설명해주세요.",
    subjectText: "OS",
    score: 1,
    title: "2023.12.25. 모의 면접 1 #2",
    pin: 0,
    again: 0,
  },
  {
    id: 2,
    questionText: "Round Robin 스케쥴링에 대해 설명해주세요.",
    subjectText: "DB",
    score: 0.5,
    title: "2023.12.25. 모의 면접 1 #1",
    pin: 1,
    again: 1,
  },
  {
    id: 3,
    questionText: "Round Robin 스케쥴링에 대해 설명해주세요 설명해주세요.",
    subjectText: "NW",
    score: 0,
    title: "2024.03.25. 모의 면접 1 #1",
    pin: 1,
    again: 0,
  },
];
