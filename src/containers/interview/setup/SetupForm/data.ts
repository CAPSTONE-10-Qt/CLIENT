export const CSSubjectList: {
  text: CSSubjectType;
  largeSubtext: string;
  smallSubtext: string;
}[] = [
  { text: "OS", largeSubtext: "운영체제", smallSubtext: "Operating System" },
  {
    text: "CA",
    largeSubtext: "컴퓨터구조",
    smallSubtext: "Computer Architecture",
  },
  { text: "DS", largeSubtext: "자료구조", smallSubtext: "Data Structure" },
  { text: "NW", largeSubtext: "네트워크", smallSubtext: "Network" },
  { text: "DB", largeSubtext: "데이터베이스", smallSubtext: "Database" },
  {
    text: "SE",
    largeSubtext: "소프트웨어공학",
    smallSubtext: "Software Engineering",
  },
];

export const QuestionList: {
  text: QuestionType;
  smallSubtext: string;
}[] = [
  { text: 5, smallSubtext: "10분 이내 소요" },
  { text: 10, smallSubtext: "15분 이내 소요" },
  { text: 20, smallSubtext: "25분 이내 소요" },
];
