interface QuestionPreviewType {
  subjectText: CSSubjectType;
  title: string;
  id: number;
  again: number;
  questionText: string;
  score: number;
  pin: number;
}

interface QuestionFirstDetailType {
  questionText: string;
  sampleAnswer: string;
  score: number;
  text: string;
  feedbackText: string;
  time: number;
  id: number;
  pin: number;
}

interface QuestionDetailType extends QuestionFirstDetailType {
  title: string;
  questionNum: number;
  subjectText: CSSubjectType;
  startDateTime: string;
  again: number;
  againList: {
    score: number;
    text: string;
    feedbackText: string;
    time: number;
    startDateTime: string;
  }[];
}
