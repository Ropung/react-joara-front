import { useQuery } from "@tanstack/react-query";
import { apiBook } from "@/libs/axios/api";
import API_PATH from "@/constants/path/api";
import { BOOK_KEY, GENRE_KEY } from "@/constants/key";
import { BookDetailedReq, GenreListRes } from "@/models/book";

const { API_BOOK } = API_PATH;
// "/api/boards"
const fetcher = async (bookId: number) => {
  const { data } = await apiBook.get<BookDetailedReq>(`${API_BOOK}/${bookId}`);
  return data;
};

const useBookOfOneQuery = (bookId: number) => {
  return useQuery({
    queryKey: [BOOK_KEY, bookId],
    queryFn: () => fetcher(bookId),
    // enabled: !!page,
  });
};

export default useBookOfOneQuery;
