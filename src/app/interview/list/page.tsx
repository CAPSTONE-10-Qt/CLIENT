import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "모의 면접 기록 : iterview",
};

import InterviewListContainer from "@containers/interview/list";

export default function InterviewList() {
  return <InterviewListContainer />;
}
