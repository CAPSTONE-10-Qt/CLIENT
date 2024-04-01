type CSSubjectType = "OS" | "CA" | "DS" | "NW" | "DB" | "SE";
type QuestionType = 5 | 10 | 20;

interface InterviewSetupFormType {
  subjectText: CSSubjectType | "";
  questionNum: QuestionType | 0;
  onlyVoice: boolean;
}

interface InterviewDataType {
  id: number;
  subjectText: CSSubjectType;
  questionNum: QuestionType;
  onlyVoice: boolean;
  startDateTime: string;
  questionList: {
    id: number;
    questionText: string;
  }[];
  currentIndex: number;
  isMicOn: boolean;
  isSpeakerOn: boolean;
}

interface InterviewPreviewType {
  subjectText: CSSubjectType;
  startDateTime: string;
  endDateTime: string;
  time: number;
  title: string;
  score: number;
  questionNum: number;
  id: number;
}
