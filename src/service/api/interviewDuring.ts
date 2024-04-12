import { backendClient } from ".";

// 면접 시작
type PostInterviewBodyType = {
  subjectText: CSSubjectType;
  questionNum: number;
  onlyVoice: boolean;
  startDateTime: string;
};
export const postInterview = async (body: PostInterviewBodyType) => {
  const url = `/interview`;
  return backendClient.post(url, body);
};

// 질문별 답변 저장 (FE -> ML -> FE -> BE)
type PostAnswerBodyType = {
  mumble: number;
  silent: number;
  talk: number;
  time: number;
  text: string;
};
export const postAnswer = async (
  questionId: number,
  body: PostAnswerBodyType,
) => {
  const url = `/interview/answers/${questionId}`;
  return backendClient.post(url, body);
};

// 표정 저장 (FE -> ML -> FE -> BE)
type FaceType =
  | "angry"
  | "disgust"
  | "fear"
  | "happy"
  | "sad"
  | "surprise"
  | "neutral";
export const postFace = async (
  questionId: number,
  body: { emotion: FaceType },
) => {
  const url = `/interview/picture/${questionId}`;
  return backendClient.post(url, body);
};

// 면접 종료
export const patchInterview = async (
  interviewId: number,
  body: { endDateTime: string },
) => {
  const url = `/interview/${interviewId}`;
  return backendClient.patch(url, body);
};

// 질문 재답변 시작
export const patchQuestionStart = async (questionId: number) => {
  const url = `/studynote/${questionId}`;
  return backendClient.patch(url);
};

// 질문 재답변 종료
