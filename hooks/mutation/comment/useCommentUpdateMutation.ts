import { BOOK_KEY } from "@/constants/key";
import API_PATH from "@/constants/path/api";
import Path from "@/constants/path/routes";
import { apiBookMultipart } from "@/libs/axios/api";
import { BookUpdateReq, BookUpdateRes } from "@/models/books/book";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const { API_COMMENT_UPDATE } = API_PATH;
const { BOOK_ME } = Path;

const commentUpdateFetcher = (reqData: BookUpdateReq) => {
  return apiBookMultipart
    .put<BookUpdateRes>(API_COMMENT_UPDATE + reqData.bookId, reqData)
    .then(({ data }) => {
      if (data.success) {
        alert("책이 성공적으로 수정되었습니다.");
        window.location.href = BOOK_ME;
      } else alert("수정에 실패했습니다. ");
    })
    .catch(console.error);
};

export const useCommentUpdateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(commentUpdateFetcher, {
    onError: (error) => {
      return alert(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries<string>([BOOK_KEY]);
    },
  });
};
