import { useQuery } from "@tanstack/react-query";
import { apiBook } from "@/libs/axios/api";
import API_PATH from "@/constants/path/api";
import { BOOK_KEY } from "@/constants/key";
import { PreviewGenreBooksResponse } from "@/models/book";

const { API_GENRE_BOOK_PREVIEW } = API_PATH;
// "/api/boards"
const fetcher = async (genreId: number, size: number, page: number) => {
  const { data } = await apiBook.get<PreviewGenreBooksResponse>(
    `${API_GENRE_BOOK_PREVIEW + genreId}?size=${size}&page=${page}`
  );
  return data;
};

const useGenreBooksPreviewQuery = (
  genreId: number,
  size: number,
  page: number
) => {
  return useQuery({
    queryKey: [BOOK_KEY, genreId, size, page],
    queryFn: () => fetcher(genreId, size, page),
    // enabled: !!page,
  });
};

export default useGenreBooksPreviewQuery;
