import {
  BOOK_COMMENT_KEY,
  BOOK_FAVORITE_LIST_KEY,
  BOOK_MY_LIST_KEY,
  BOOK_ONE_KEY,
  BOOK_RECOMMEND_KEY,
} from "@/constants/key";
import API_PATH from "@/constants/path/api";
import { apiBook } from "@/libs/axios/api";
import { BookDeleteRes } from "@/models/books/book";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const { API_BOOK_DELETE } = API_PATH;

const bookDeleteFetcher = async (bookId: number) => {
  const { data: result } = await apiBook.delete<BookDeleteRes>(
    `${API_BOOK_DELETE}/${bookId}`
  );
  return result;
};

export const useBookDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(bookDeleteFetcher, {
    onError: (error) => {
      return alert(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries<string>([BOOK_FAVORITE_LIST_KEY]);
      queryClient.invalidateQueries<string>([BOOK_MY_LIST_KEY]);
      queryClient.invalidateQueries<string>([BOOK_RECOMMEND_KEY]);
      queryClient.invalidateQueries<string>([BOOK_COMMENT_KEY]);
      queryClient.invalidateQueries<string>([BOOK_ONE_KEY]);
    },
  });
};
