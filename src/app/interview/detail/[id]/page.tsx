import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "모의 면접 결과 : iterview",
};

import InterviewDetailContainer from "@containers/interview/detail";
import { getInterview } from "@service/api/interviewAfter";

async function fetchData() {
  const res = await fetch("http://3.37.35.106:8000/interview/result/95", {
    cache: "no-store",
  });
  const { data } = await res.json();
  return data;
}

export default async function InterviewDetail() {
  const data = await fetchData();
  return <InterviewDetailContainer data={data} />;
}
