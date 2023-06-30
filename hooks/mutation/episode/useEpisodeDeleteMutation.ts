import { EPISODE_LIST_KEY, EPISODE_ONE_KEY } from "@/constants/key";
import { apiBook } from "@/libs/axios/api";

import { EpisodeDeleteRes } from "@/models/books/episode";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const episodeDeleteFetcher = async (bookId: number, eid: string) => {
  const { data: result } = await apiBook.delete<EpisodeDeleteRes>(
    `books/${bookId}/episode/${eid}`
  );
  return result;
};

export const useEpisodeDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ bid, eid }: { bid: number; eid: string }) =>
      episodeDeleteFetcher(bid, eid),
    {
      onError: (error) => {
        return alert(error);
      },
      onSuccess: () => {
        queryClient.invalidateQueries<string>([EPISODE_LIST_KEY]);
        queryClient.invalidateQueries<string>([EPISODE_ONE_KEY]);
      },
    }
  );
};
