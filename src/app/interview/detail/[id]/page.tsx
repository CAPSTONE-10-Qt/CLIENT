import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "모의 면접 결과 : iterview",
};

import InterviewDetailContainer from "@containers/interview/detail";
import { getInterview } from "@service/api/interviewAfter";

export default async function InterviewDetail({
  params,
}: {
  params: { id: string };
}) {
  const data = await getInterview(params.id);
  return <InterviewDetailContainer data={data} />;
}
