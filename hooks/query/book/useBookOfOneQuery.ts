import { useQuery } from "@tanstack/react-query";
import { apiBook } from "@/libs/axios/api";
import API_PATH from "@/constants/path/api";
import { BOOK_ONE_KEY } from "@/constants/key";
import { BookDetailedRes } from "@/models/books/book";

const { API_BOOK } = API_PATH;
const fetcher = async (bookId: number) => {
  const { data } = await apiBook.get<BookDetailedRes>(`${API_BOOK}/${bookId}`);
  return data;
};

const useBookOfOneQuery = (bookId: number) => {
  return useQuery({
    queryKey: [BOOK_ONE_KEY, bookId],
    queryFn: () => fetcher(bookId),
    // enabled: !!page,
  });
};

export default useBookOfOneQuery;
