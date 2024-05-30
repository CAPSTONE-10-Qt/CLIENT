import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "학습 노트 상세 : iterview",
};

import QuestionDetailContainer from "@containers/question/detail";
import { getQuestion } from "@service/api/interviewAfter";

import { getServerSession } from "next-auth";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";

export default async function QuestionDetail({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);
  const data = await getQuestion(
    params.id,
    session?.user.accessToken as string,
  );
  return <QuestionDetailContainer data={data} />;
}
