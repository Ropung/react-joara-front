import { useQuery } from "@tanstack/react-query";
import apiAuth, { apiBook } from "@/libs/axios/api";
import API_PATH from "@/constants/path/api";
import { MEMBER_KEY } from "@/constants/key";
import { MemberProfileInfoRes } from "@/models/auth";

const { API_MEMBER_PROFILE } = API_PATH;
// "/api/boards"
const fetcher = async () => {
  const { data } = await apiAuth.get<MemberProfileInfoRes>(
    `${API_MEMBER_PROFILE}`
  );
  return data;
};

const useMemberQuery = () => {
  return useQuery({
    queryKey: [MEMBER_KEY],
    queryFn: () => fetcher(),
    // enabled: !!page,
  });
};

export default useMemberQuery;
