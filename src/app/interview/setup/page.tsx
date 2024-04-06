import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "모의 면접 시작하기 : iterview",
};

import InterviewSetupContainer from "@containers/interview/setup";

export default function InterviewSetup() {
  return <InterviewSetupContainer />;
}
