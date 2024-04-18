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

type InterviewTTSStateType = {
  files: { audio_content: string }[];
  audio: HTMLAudioElement | null;
};
export const interviewTTSState = atom<InterviewTTSStateType>({
  key: "interviewTTSState",
  default: {
    files: [],
    audio: null,
  },
  effects_UNSTABLE: [persistAtom],
});

export const interviewState = atom<{
  isRunning: boolean;
  isFirst5: boolean;
  quit: boolean;
  done: boolean;
}>({
  key: "interviewState",
  default: { isRunning: false, isFirst5: true, quit: false, done: false },
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
