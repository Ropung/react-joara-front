import { useQuery } from "@tanstack/react-query";
import { apiBook } from "@/libs/axios/api";
import API_PATH from "@/constants/path/api";
import { MyBookListDetailedRes } from "@/models/books/book";
import { BOOK_MY_LIST_KEY } from "@/constants/key";

const { API_BOOK_ME } = API_PATH;

const fetcher = async () => {
  const { data } = await apiBook.get<MyBookListDetailedRes>(`${API_BOOK_ME}`);
  return data;
};

const useBookOfMyListQuery = () => {
  return useQuery({
    queryKey: [BOOK_MY_LIST_KEY],
    queryFn: () => fetcher(),
    // enabled: !!page,
  });
};

export default useBookOfMyListQuery;
