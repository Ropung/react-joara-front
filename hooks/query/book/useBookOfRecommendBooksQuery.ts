import { useQuery } from "@tanstack/react-query";
import { apiBook } from "@/libs/axios/api";
import API_PATH from "@/constants/path/api";
import { BOOK_KEY, BOOK_RECOMMEND_KEY } from "@/constants/key";
import { RecommendedBooksQueryRes } from "@/models/books/book";

const { API_BOOK, API_BOOK_RECOMMEND } = API_PATH;
// "/api/boards"
const fetcher = async (bookId: number) => {
  const { data } = await apiBook.get<RecommendedBooksQueryRes>(
    `${API_BOOK}/${bookId}${API_BOOK_RECOMMEND}`
  );
  return data;
};

const useBookOfRecommendBooksQuery = (bookId: number) => {
  return useQuery({
    queryKey: [BOOK_RECOMMEND_KEY, bookId],
    queryFn: () => fetcher(bookId),
    // enabled: !!page,
  });
};

export default useBookOfRecommendBooksQuery;
