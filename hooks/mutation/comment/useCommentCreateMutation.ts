import { COMMENT_CREATE_KEY, COMMENT_KEY } from "@/constants/key";
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
    .then(({ data }) => {})
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
        queryClient.invalidateQueries<string>([
          COMMENT_KEY,
          COMMENT_CREATE_KEY,
        ]);
      },
    }
  );
};
