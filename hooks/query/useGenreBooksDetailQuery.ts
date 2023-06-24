import { useQuery } from "@tanstack/react-query";
import { apiBook } from "@/libs/axios/api";
import API_PATH from "@/constants/path/api";
import { GENRE_BOOK_KEY } from "@/constants/key";
import { PreviewGenreBooksRes } from "@/models/book";

const { API_GENRE_BOOK } = API_PATH;
// "/api/boards"
const fetcher = async (genreId: number, size: number, page: number) => {
  const { data } = await apiBook.get<PreviewGenreBooksRes>(
    `${API_GENRE_BOOK}/${genreId}?size=${size}&page=${page}`
  );
  return data;
};

const useGenreBooksDetailQuery = (
  genreId: number,
  size: number,
  page: number
) => {
  return useQuery({
    queryKey: [GENRE_BOOK_KEY, genreId, size, page],
    queryFn: () => fetcher(genreId, size, page),
    // enabled: !!page,
  });
};

export default useGenreBooksDetailQuery;
