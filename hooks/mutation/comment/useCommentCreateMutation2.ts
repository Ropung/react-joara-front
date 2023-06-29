import { BOOK_KEY } from "@/constants/key";
import API_PATH from "@/constants/path/api";
import Path from "@/constants/path/routes";
import { apiBookMultipart } from "@/libs/axios/api";
import { BookCreateReq, BookCreateRes } from "@/models/books/book";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const { API_COMMENT_CREATE } = API_PATH;
const { BOOK_ME } = Path;
// 책 추가
const commentCreateFetcher = (reqData: BookCreateReq) => {
  return apiBookMultipart
    .post<BookCreateRes>(API_COMMENT_CREATE, reqData)
    .then(({ data }) => {
      if (data.success) {
        alert("책이 성공적으로 등록되었습니다.");
        window.location.href = BOOK_ME;
      } else alert("중복된 제목이거나 등록에 실패했습니다. ");
    })
    .catch(console.error);
};

export const useCommentCreateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(commentCreateFetcher, {
    onError: (error) => {
      return alert(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries<string>([BOOK_KEY]);
    },
  });
};
