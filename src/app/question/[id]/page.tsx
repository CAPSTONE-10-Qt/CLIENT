import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "질문 재답변 : iterview",
};

import InterviewMainContainer from "@containers/interview/main";

export default function QuestionMain() {
  return <InterviewMainContainer />;
}
