import { useQuery } from "@tanstack/react-query";
import { apiBook } from "@/libs/axios/api";
import API_PATH from "@/constants/path/api";
import { GENRE_KEY } from "@/constants/key";
import { BookGenreProps } from "@/models/book";

const { API_GENRE_BOOK } = API_PATH;
// "/api/boards"
const fetcher = async () => {
  const { data } = await apiBook.get<BookGenreProps>(`${API_GENRE_BOOK}`);
  return data;
};

const useGenreListQuery = () => {
  return useQuery({
    queryKey: [GENRE_KEY],
    queryFn: () => fetcher(),
    // enabled: !!page,
  });
};

export default useGenreListQuery;
