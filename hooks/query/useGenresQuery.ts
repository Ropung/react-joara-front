import { useQuery } from "@tanstack/react-query";
import { apiBook } from "@/libs/axios/api";
import API_PATH from "@/constants/path/api";
import { BOOK_KEY, GENRE_KEY } from "@/constants/key";
import { GenreListRes } from "@/models/book";

const { API_GENRE } = API_PATH;
// "/api/boards"
const fetcher = async () => {
  const { data } = await apiBook.get<GenreListRes>(`${API_GENRE}`);
  return data;
};

const useGenresQuery = () => {
  return useQuery({
    queryKey: [GENRE_KEY, BOOK_KEY],
    queryFn: () => fetcher(),
    // enabled: !!page,
  });
};

export default useGenresQuery;
