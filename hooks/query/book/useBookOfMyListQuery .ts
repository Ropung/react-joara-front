import { useQuery } from "@tanstack/react-query";
import { apiBook } from "@/libs/axios/api";
import API_PATH from "@/constants/path/api";
import { AUTH_KEY, BOOK_KEY } from "@/constants/key";
import token from "@/utils/token";
import { MyBookListDetailedRes } from "@/models/books/book";

const { API_BOOK_ME } = API_PATH;

const fetcher = async () => {
  const { data } = await apiBook.get<MyBookListDetailedRes>(`${API_BOOK_ME}`);
  return data;
};

const useBookOfMyListQuery = () => {
  return useQuery({
    queryKey: [BOOK_KEY, AUTH_KEY, token.get],
    queryFn: () => fetcher(),
    // enabled: !!page,
  });
};

export default useBookOfMyListQuery;
