import { useQuery } from "@tanstack/react-query";
import { apiBook } from "@/libs/axios/api";
import API_PATH from "@/constants/path/api";
import { EPISODE_ONE_KEY } from "@/constants/key";
import { EpisodeReadRes } from "@/models/books/episode";

const { API_BOOK, API_EPISODE } = API_PATH;

const fetcher = async (bookId: number, epiNum: number) => {
  const { data } = await apiBook.get<EpisodeReadRes>(
    `${API_BOOK}/${bookId}${API_EPISODE}/${epiNum}`
  );
  return data;
};

const useEpisodeOfOneQuery = (bookId: number, epiNum: number) => {
  return useQuery({
    queryKey: [EPISODE_ONE_KEY, bookId, epiNum],
    queryFn: () => fetcher(bookId, epiNum),
    // enabled: !!page,
  });
};

export default useEpisodeOfOneQuery;
