import {
  BOOK_COMMENT_KEY,
  BOOK_FAVORITE_LIST_KEY,
  BOOK_MY_LIST_KEY,
  BOOK_ONE_KEY,
  BOOK_RECOMMEND_KEY,
} from "@/constants/key";
import API_PATH from "@/constants/path/api";
import Path from "@/constants/path/routes";
import { apiBook } from "@/libs/axios/api";
import { BookUpdateReq, BookUpdateRes } from "@/models/books/book";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const { API_BOOK_UPDATE } = API_PATH;
const { BOOK } = Path;

const bookUpdateFetcher = (reqData: BookUpdateReq) => {
  return apiBook
    .put<BookUpdateRes>(API_BOOK_UPDATE, reqData)
    .then(({ data }) => {
      if (data.success) {
        alert("책이 성공적으로 수정되었습니다.");
        window.location.href = `${BOOK}/${reqData.bookId}`;
      } else alert("수정에 실패했습니다. ");
    })
    .catch(console.error);
};

export const useBookUpdateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(bookUpdateFetcher, {
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
