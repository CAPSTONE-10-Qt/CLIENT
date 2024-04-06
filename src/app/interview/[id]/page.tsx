import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "모의 면접 : iterview",
};

import InterviewMainContainer from "@containers/interview/main";

export default function InterviewMain() {
  return <InterviewMainContainer />;
}
