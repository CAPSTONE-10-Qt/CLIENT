import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "학습 노트 상세 : iterview",
};

import QuestionDetailContainer from "@containers/question/detail";

export default function QuestionDetail() {
  return <QuestionDetailContainer />;
}
