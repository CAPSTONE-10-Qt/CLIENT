import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { interviewSortState } from "@store/interview";
import { questionFilterState } from "@store/interview";
import { getInterviewList, getQuestionList } from "@service/api/interviewAfter";

export const useInterviewList = () => {
  const sort = useRecoilValue(interviewSortState);
  const { data, isLoading, isError, refetch } = useQuery(
    ["InterviewList", sort],
    () => getInterviewList(sort),
  );
  const list = data?.data.data.interviewList;
  return { list, isLoading };
};

export const useQuestionList = () => {
  const filter = useRecoilValue(questionFilterState);
  const { sort, subjectText, onlyWrong } = filter;
  const { data, isLoading, isError, refetch } = useQuery(
    ["QuestionList", filter],
    () => getQuestionList(sort, subjectText, onlyWrong ? 1 : 0),
  );
  const list = data?.data.data;
  return { list, isLoading };
};
