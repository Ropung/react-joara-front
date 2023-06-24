import { useQuery } from "@tanstack/react-query";
import { apiBook } from "@/libs/axios/api";
import API_PATH from "@/constants/path/api";
import { GENRE_KEY } from "@/constants/key";
import { GenreListReq } from "@/models/book";

const { API_GENRE } = API_PATH;
// "/api/boards"
const fetcher = async () => {
  const { data } = await apiBook.get<GenreListReq>(`${API_GENRE}`);
  return data;
};

const useGenresQuery = () => {
  return useQuery({
    queryKey: [GENRE_KEY],
    queryFn: () => fetcher(),
    // enabled: !!page,
  });
};

export default useGenresQuery;
