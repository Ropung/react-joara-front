import { BOOK_FAVORITE_LIST_KEY, BOOK_ONE_KEY } from "@/constants/key";
import API_PATH from "@/constants/path/api";
import { apiBookMultipart } from "@/libs/axios/api";
import { FavoriteDeleteReq, FavoriteDeleteRes } from "@/models/books/favorite";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const { API_FAVORITE_DELETE } = API_PATH;

const favoriteDeleteFetcher = async (reqData: FavoriteDeleteReq) => {
  const { data } = await apiBookMultipart.delete<FavoriteDeleteRes>(
    `${API_FAVORITE_DELETE}`,
    {
      data: reqData,
      //  withCredentials: true,
    }
  );

  data
    ? alert("선호작 취소요청이 되었습니다.")
    : alert("선호작 취소가 실패하였습니다.");

  return data;
};

export const useFavoriteDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(favoriteDeleteFetcher, {
    onError: (error) => {
      return alert(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries<string>([BOOK_ONE_KEY]);
      queryClient.invalidateQueries<string>([BOOK_FAVORITE_LIST_KEY]);
    },
  });
};
