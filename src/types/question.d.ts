interface QuestionPreviewType {
  subjectText: string;
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
}

interface QuestionDetailType extends QuestionFirstDetailType {
  subjectText: string;
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
