import { useQuery } from "@tanstack/react-query";
import { apiBook } from "@/libs/axios/api";
import API_PATH from "@/constants/path/api";
import { BOOK_KEY, EPISODE_KEY } from "@/constants/key";
import { EpisodeDetailedReq, EpisodeReadReq } from "@/models/book";

const { API_BOOK, API_EPISODE } = API_PATH;
// "/api/boards"
const fetcher = async (bookId: number, epiNum: number) => {
  const { data } = await apiBook.get<EpisodeReadReq>(
    `${API_BOOK}/${bookId}${API_EPISODE}/${epiNum}`
  );
  return data;
};

const useEpisodeOfOneQuery = (bookId: number, epiNum: number) => {
  return useQuery({
    queryKey: [EPISODE_KEY, BOOK_KEY, bookId, epiNum],
    queryFn: () => fetcher(bookId, epiNum),
    // enabled: !!page,
  });
};

export default useEpisodeOfOneQuery;
