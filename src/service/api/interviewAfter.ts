import { backendClient } from ".";

// 면접 상세 조회
export const getInterview = async (interviewId: number) => {
  const url = `/interview/result/${interviewId}`;
  return backendClient.get(url);
};

// 면접 리스트 조회
export const getInterviewList = async (sort: number) => {
  const url = `/history/${sort}`;
  return backendClient.get(url);
};

// 질문 스크랩
export const patchQuestion = async (questionId: number) => {
  const url = `/questions/${questionId}`;
  return backendClient.patch(url);
};

// 질문 상세 조회
export const getQuestion = async (questionId: number) => {
  const url = `/studynote/${questionId}`;
  return backendClient.get(url);
};

// 질문 리스트 조회
export const getQuestionList = async (
  filter: number,
  subjectText: CSSubjectType | "ALL",
  onlyWrong: boolean,
) => {
  const url = `/history/${filter}?subjectText=${subjectText}&onlyWrong=${onlyWrong}`;
  return backendClient.get(url);
};
