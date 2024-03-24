"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { interviewDataState } from "@store/interview";

import Description from "../Description";
import RoundButton from "@components/RoundButton";
import RectButton from "@components/RectButton";
import CheckBox from "@components/CheckBox";
import { CSSubjectList, QuestionList } from "./data";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const SetupForm = () => {
  const router = useRouter();
  const [form, setForm] = useState<InterviewSetupFormType>({
    subjectText: "",
    questionNum: 0,
    onlyVoice: false,
  });
  const [interview, setInterview] = useRecoilState(interviewDataState);
  const onSubmit = () => {
    setInterview(data);
    router.push(`/interview/${1}`);
  };
  return (
    <div className={cx("container")}>
      <div className={cx("title", "top")}>
        📖 면접을 진행할 CS 과목을 선택해주세요
      </div>
      <div className={cx("button-container")}>
        {CSSubjectList.map(item => (
          <RoundButton
            key={item.text}
            text={item.text}
            largeSubtext={item.largeSubtext}
            smallSubtext={item.smallSubtext}
            state={form.subjectText === item.text}
            onClick={() => setForm({ ...form, subjectText: item.text })}
          />
        ))}
      </div>
      <div className={cx("title")}>
        ❔ 모의 면접을 진행할 질문 개수를 선택해주세요
      </div>
      <div className={cx("button-container", "three")}>
        {QuestionList.map(item => (
          <RoundButton
            key={item.text}
            text={`${item.text}개`}
            smallSubtext={item.smallSubtext}
            state={form.questionNum === item.text}
            onClick={() => setForm({ ...form, questionNum: item.text })}
            staticWidth={100}
          />
        ))}
      </div>
      <div className={cx("title")}>
        ✅ 아래 유의사항을 확인 후 면접을 시작해주세요
      </div>
      <Description />
      <div className={cx("checkbox-container")}>
        <CheckBox
          state={form.onlyVoice}
          onClick={() => setForm({ ...form, onlyVoice: !form.onlyVoice })}
        />
        <p>음성으로만 면접을 진행하고 싶어요.</p>
      </div>
      <RectButton text='면접 시작' onClick={onSubmit} />
    </div>
  );
};

export default SetupForm;

const data: InterviewType = {
  id: 1,
  subjectText: "OS",
  questionNum: 5,
  startDateTime: "",
  questionList: [
    {
      id: 0,
      questionText:
        "운영체제란 무엇이며 핵심 기능에는 어떤 것이 있는지 설명하시오.",
    },
    {
      id: 1,
      questionText: "세마포어와 뮤텍스란 무엇이며 그 차이점에 대해 설명하시오.",
    },
    {
      id: 2,
      questionText:
        "Starvation 상태를 설명하는 식사하는 철학자 문제에 대해 설명해보세요.",
    },
    {
      id: 3,
      questionText:
        "사용자 수준 스레드와 커널 수준 스레드에 대한 각각의 장단점과 차이점에 대해 설명하시오.",
    },
    {
      id: 4,
      questionText:
        "데이터 모델에 따라 NoSQL을 분류한다면 어떻게 분류할 수 있을지 설명하시오.",
    },
  ],
};
