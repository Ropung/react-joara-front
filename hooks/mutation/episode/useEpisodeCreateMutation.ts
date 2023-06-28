import { BOOK_CREATE_KEY, BOOK_KEY, BOOK_UPDATE_KEY } from "@/constants/key";
import API_PATH from "@/constants/path/api";
import Path from "@/constants/path/routes";
import { apiBookMultipart } from "@/libs/axios/api";
import { BookCreateReq, BookCreateResponse } from "@/models/books/book";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const { API_EPISODE_CREATE } = API_PATH;
const { BOOK_ME } = Path;
// 책 추가
const episodeCreateFetcher = (reqData: BookCreateReq) => {
  return apiBookMultipart
    .post<BookCreateResponse>(API_EPISODE_CREATE, reqData)
    .then(({ data }) => {
      if (data.success) {
        alert("책이 성공적으로 등록되었습니다.");
        window.location.href = BOOK_ME;
      } else alert("중복된 제목이거나 등록에 실패했습니다. ");
    })
    .catch(console.error);
};

export const useEpisodeCreateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(episodeCreateFetcher, {
    onError: (error) => {
      return alert(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries<string>([BOOK_KEY]);
    },
  });
};
