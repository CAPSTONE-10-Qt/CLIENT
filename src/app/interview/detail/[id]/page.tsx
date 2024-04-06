import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "모의 면접 결과 : iterview",
};

import InterviewDetailContainer from "@containers/interview/detail";

export default function InterviewDetail() {
  return <InterviewDetailContainer />;
}
