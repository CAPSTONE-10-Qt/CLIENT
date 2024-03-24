import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "recoilPersistSession",
  storage: sessionStorage,
});

export const interviewQuestionState = atom<number>({
  key: "interviewQuestionState",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const interviewDataState = atom<InterviewType>({
  key: "interviewDataState",
  default: {
    id: 0,
    subjectText: "OS",
    questionNum: 5,
    startDateTime: "",
    questionList: [
      {
        id: 0,
        questionText: "",
      },
    ],
  },
  effects_UNSTABLE: [persistAtom],
});
