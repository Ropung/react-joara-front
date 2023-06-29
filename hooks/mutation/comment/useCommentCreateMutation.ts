import { COMMENT_KEY } from "@/constants/key";
import { apiBook } from "@/libs/axios/api";
import { CommentCreateReq, CommentCreateRes } from "@/models/books/comment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// 책 추가
const commentCreateFetcher = (
  bookId: number,
  episodeId: string,
  commentValue: CommentCreateReq
) => {
  return apiBook
    .post<CommentCreateRes>(
      `/books/${bookId}/episode/${episodeId}/comment`,
      commentValue
    )
    .then(({ data }) => {
      data.success
        ? alert("댓글이 성공적으로 등록되었습니다.")
        : alert("중복된 제목이거나 등록에 실패했습니다. ");
    })
    .catch(console.error);
};

export const useCommentCreateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({
      bookId,
      episodeId,
      commentValue,
    }: {
      bookId: number;
      episodeId: string;
      commentValue: CommentCreateReq;
    }) => commentCreateFetcher(bookId, episodeId, commentValue),
    {
      onError: (error) => {
        return alert(error);
      },
      onSuccess: () => {
        queryClient.invalidateQueries<string>([COMMENT_KEY]);
      },
    }
  );
};
