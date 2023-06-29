import { FAVORITE_DELETE_KEY } from "@/constants/key";
import API_PATH from "@/constants/path/api";
import { apiBookMultipart } from "@/libs/axios/api";
import { FavoriteDeleteReq, FavoriteDeleteRes } from "@/models/books/favorite";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const { API_FAVORITE_DELETE } = API_PATH;

const favoriteDeleteFetcher = async (reqData: FavoriteDeleteReq) => {
  const { data } = await apiBookMultipart.delete<FavoriteDeleteRes>(
    `${API_FAVORITE_DELETE}`,
    {
      data: {
        bookId: reqData.bookId,
      },
      // withCredentials: true,
    }
  );
  return data;
};

export const useFavoriteDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(favoriteDeleteFetcher, {
    onError: (error) => {
      return alert(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries<string>([FAVORITE_DELETE_KEY]);
    },
  });
};
