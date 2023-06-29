import { BOOK_KEY, BOOK_UPDATE_KEY } from "@/constants/key";
import API_PATH from "@/constants/path/api";
import Path from "@/constants/path/routes";
import { apiBook, apiBookMultipart } from "@/libs/axios/api";
import {
  BookDeleteRes,
  BookUpdateReq,
  BookUpdateRes,
  FavorBookListDetailedRes,
} from "@/models/books/book";
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
      queryClient.invalidateQueries<string>([BOOK_KEY]);
    },
  });
};
