import { useQuery } from "@tanstack/react-query";
import { apiBook } from "@/libs/axios/api";
import API_PATH from "@/constants/path/api";
import { EPISODE_KEY } from "@/constants/key";
import { EpisodeDetailedReq } from "@/models/book";

const { API_BOOK, API_EPISODE } = API_PATH;
// "/api/boards"
const fetcher = async (bookId: number, size: number, page: number) => {
  const { data } = await apiBook.get<EpisodeDetailedReq>(
    `${API_BOOK}/${bookId}${API_EPISODE}`
  );
  return data;
};

const useEpisodeByBookQuery = (bookId: number, size: number, page: number) => {
  return useQuery({
    queryKey: [EPISODE_KEY],
    queryFn: () => fetcher(bookId, size, page),
    // enabled: !!page,
  });
};

export default useEpisodeByBookQuery;
