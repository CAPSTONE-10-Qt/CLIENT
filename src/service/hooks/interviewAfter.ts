import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { interviewSortState } from "@store/interview";
import { getInterviewList } from "@service/api/interviewAfter";

export const useInterviewList = () => {
  const sort = useRecoilValue(interviewSortState);
  const { data, isLoading, isError, refetch } = useQuery(
    ["InterviewList", sort],
    () => getInterviewList(sort),
  );
  const list = data?.data.data.data.interviewList;
  return { list, isLoading };
};
