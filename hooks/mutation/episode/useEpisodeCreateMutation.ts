import { BOOK_CREATE_KEY, BOOK_KEY, BOOK_UPDATE_KEY } from "@/constants/key";
import API_PATH from "@/constants/path/api";
import Path from "@/constants/path/routes";
import { apiBookMultipart } from "@/libs/axios/api";
import { EpisodeCreateReq, EpisodeCreateRes } from "@/models/books/episode";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const { BOOK_ME } = Path;
// 책 추가
const episodeCreateFetcher = (bookId: number, reqData: EpisodeCreateReq) => {
  return apiBookMultipart
    .post<EpisodeCreateRes>(`/books/${bookId}/episode`, reqData)
    .then(({ data }) => {
      if (data.success) {
        alert("에피소드가 성공적으로 등록되었습니다.");
      } else alert("중복된 제목이거나 등록에 실패했습니다. ");
    })
    .catch(console.error);
};

export const useEpisodeCreateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ bookId, epiValue }: { bookId: number; epiValue: EpisodeCreateReq }) =>
      episodeCreateFetcher(bookId, epiValue),
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
