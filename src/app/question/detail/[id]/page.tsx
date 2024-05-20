import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "학습 노트 상세 : iterview",
};

import QuestionDetailContainer from "@containers/question/detail";
import { getQuestion } from "@service/api/interviewAfter";

export default async function QuestionDetail({
  params,
}: {
  params: { id: string };
}) {
  const data = await getQuestion(params.id);
  return <QuestionDetailContainer data={data} />;
}
