import { BOOK_KEY } from "@/constants/key";
import { apiBook } from "@/libs/axios/api";
import { EpisodeUpdateReq, EpisodeUpdateRes } from "@/models/books/episode";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const episodeUpdateFetcher = (
  bid: number,
  eid: string,
  reqData: EpisodeUpdateReq
) => {
  // FIXME
  console.log(eid);

  return apiBook
    .put<EpisodeUpdateRes>(`/books/${bid}/episode/${eid}`, reqData)
    .then(({ data }) => {
      data.success
        ? alert("에피소드가 성공적으로 수정되었습니다.")
        : alert("수정에 실패했습니다. ");
    })
    .catch(console.error);
};

export const useEpisodeUpdateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({
      bid,
      eid,
      epiValue,
    }: {
      bid: number;
      eid: string;
      epiValue: EpisodeUpdateReq;
    }) => episodeUpdateFetcher(bid, eid, epiValue),
    {
      onError: (error) => {
        return alert(error);
      },
      onSuccess: () => {
        queryClient.invalidateQueries<string>([BOOK_KEY]);
      },
    }
  );
};
