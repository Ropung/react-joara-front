import { BOOK_FAVORITE_LIST_KEY, BOOK_ONE_KEY } from "@/constants/key";
import API_PATH from "@/constants/path/api";
import Path from "@/constants/path/routes";
import { apiBook, apiBookMultipart } from "@/libs/axios/api";
import { FavoriteCreateReq, FavoriteCreateRes } from "@/models/books/favorite";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const { API_FAVORITE_CREATE } = API_PATH;
const { BOOK_ME } = Path;
// 책 추가
const favoriteCreateFetcher = (reqData: FavoriteCreateReq) => {
  return apiBookMultipart
    .post<FavoriteCreateRes>(API_FAVORITE_CREATE, reqData)
    .then(({ data }) => {
      data.success
        ? alert("선호작이 등록 되었습니다.")
        : alert("선호작을 취소 합니다.");
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
      queryClient.invalidateQueries<string>([BOOK_ONE_KEY]);
      queryClient.invalidateQueries<string>([BOOK_FAVORITE_LIST_KEY]);
    },
  });
};
