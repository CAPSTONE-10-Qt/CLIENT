import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "질문별 학습 노트 : iterview",
};

import QuestionListContainer from "@containers/question/list";

export default function QuestionList() {
  return <QuestionListContainer />;
}
