import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "recoilPersistSession",
  storage: sessionStorage,
});

export const interviewDataState = atom<InterviewDataType>({
  key: "interviewDataState",
  default: {
    id: 0,
    subjectText: "OS",
    questionNum: 5,
    onlyVoice: false,
    startDateTime: "",
    questionList: [
      {
        id: 0,
        questionText: "",
      },
    ],
    currentIndex: 0,
    isMicOn: false,
    isSpeakerOn: true,
  },
  effects_UNSTABLE: [persistAtom],
});

export const interviewAllowState = atom<{ quit: boolean; done: boolean }>({
  key: "interviewAllowState",
  default: { quit: false, done: false },
  effects_UNSTABLE: [persistAtom],
});

export const interviewSortState = atom<number>({
  key: "interviewSortState",
  default: 1,
});
