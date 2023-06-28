import { useQuery } from "@tanstack/react-query";
import { apiBook } from "@/libs/axios/api";
import API_PATH from "@/constants/path/api";
import { AUTH_KEY } from "@/constants/key";
import { MyBookListDetailedReq } from "@/models/book";
import token from "@/utils/token";

const { API_BOOK_ME } = API_PATH;

const fetcher = async () => {
  const { data } = await apiBook.get<MyBookListDetailedReq>(`${API_BOOK_ME}`);
  return data;
};

const useBookOfMyListQuery = () => {
  return useQuery({
    queryKey: [AUTH_KEY, token.get],
    queryFn: () => fetcher(),
    // enabled: !!page,
  });
};

export default useBookOfMyListQuery;
