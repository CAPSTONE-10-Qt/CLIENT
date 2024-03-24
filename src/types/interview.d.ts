type CSSubjectType = "OS" | "CA" | "DS" | "NW" | "DB" | "SE";
type QuestionType = 5 | 10 | 20;

interface InterviewSetupFormType {
  subjectText: CSSubjectType | "";
  questionNum: QuestionType | 0;
  onlyVoice: boolean;
}

interface InterviewType {
  id: number;
  subjectText: CSSubjectType;
  questionNum: QuestionType;
  startDateTime: string;
  questionList: {
    id: number;
    questionText: string;
  }[];
}
