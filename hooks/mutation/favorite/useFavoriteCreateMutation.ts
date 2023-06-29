import { BOOK_KEY, FAVORITE_CREATE_KEY } from "@/constants/key";
import API_PATH from "@/constants/path/api";
import Path from "@/constants/path/routes";
import { apiBook, apiBookMultipart } from "@/libs/axios/api";
import { FavoriteCreateRes } from "@/models/books/favorite";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const { API_FAVORITE_CREATE } = API_PATH;
const { BOOK_ME } = Path;
// 책 추가
const favoriteCreateFetcher = (bookId: number) => {
  return apiBookMultipart
    .post<FavoriteCreateRes>(API_FAVORITE_CREATE, { data: bookId })
    .then(({ data }) => {
      if (data.success) {
        alert("선호작이 등록 되었습니다.");
        window.location.href = BOOK_ME;
      } else alert("선호작을 삭제 합니다.");
    })
    .catch(console.error);
};

export const useFavoriteCreateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(favoriteCreateFetcher, {
    onError: (error) => {
      return alert(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries<string>([FAVORITE_CREATE_KEY]);
    },
  });
};
