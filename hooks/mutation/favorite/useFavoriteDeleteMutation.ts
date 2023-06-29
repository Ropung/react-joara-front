import { BOOK_KEY, FAVORITE_DELETE_KEY } from "@/constants/key";
import API_PATH from "@/constants/path/api";
import { apiBook } from "@/libs/axios/api";
import { FavorBookListDetailedRes } from "@/models/books/book";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const { API_FAVORITE_DELETE } = API_PATH;

const favoriteDeleteFetcher = async (bookId: number) => {
  const { data: result } = await apiBook.delete<FavorBookListDetailedRes>(
    `${API_FAVORITE_DELETE}`,
    { data: { bookId } }
  );
  return result;
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
