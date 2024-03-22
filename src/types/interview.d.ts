type CSSubjectType = "OS" | "CA" | "DS" | "NW" | "DB" | "SE";
type QuestionType = 5 | 10 | 20;

interface InterviewSetupFormType {
  subjectText: CSSubjectType | "";
  questionNum: QuestionType | 0;
  onlyVoice: boolean;
}
