"use client";

import React from "react";
import { useRecoilValue } from "recoil";
import { interviewDataState } from "@store/interview";
import TextBox from "@components/TextBox";

const Question = () => {
  const { currentIndex, questionList } = useRecoilValue(interviewDataState);
  return (
    <TextBox
      type='question'
      text={questionList[currentIndex].questionText}
      questionNumber={currentIndex + 1}
    />
  );
};

export default Question;
