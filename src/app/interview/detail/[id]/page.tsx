import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "모의 면접 결과 : iterview",
};

import InterviewDetailContainer from "@containers/interview/detail";
import { getInterview } from "@service/api/interviewAfter";

import { getServerSession } from "next-auth";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";

export default async function InterviewDetail({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);
  const data = await getInterview(
    params.id,
    session?.user.accessToken as string,
  );
  return <InterviewDetailContainer data={data} />;
}
