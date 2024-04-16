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
    title: "2024. 01. 01. 모의 면접 1",
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

export const interviewTTSState = atom<{ audio_content: string }[]>({
  key: "interviewTTSState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const interviewState = atom<{
  isRunning: boolean;
  quit: boolean;
  done: boolean;
}>({
  key: "interviewAllowState",
  default: { isRunning: false, quit: false, done: false },
  effects_UNSTABLE: [persistAtom],
});

export const interviewSortState = atom<number>({
  key: "interviewSortState",
  default: 1,
});

export const questionFilterState = atom<{
  sort: number;
  subjectText: CSSubjectType | "ALL";
  onlyWrong: boolean;
}>({
  key: "questionFilterState",
  default: { sort: 1, subjectText: "ALL", onlyWrong: false },
});
