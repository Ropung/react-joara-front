import { BOOK_COMMENT_KEY } from "@/constants/key";
import { apiBookMultipart } from "@/libs/axios/api";
import { CommentUpdateRes } from "@/models/books/comment";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const commentUpdateFetcher = (
  bookId: number,
  episodeId: string,
  commentId: string,
  commentContent: string
) => {
  return apiBookMultipart
    .put<CommentUpdateRes>(
      `books/${bookId}/episode/${episodeId}/comment/${commentId}}`,
      commentContent
    )
    .then(({ data }) => {})
    .catch(console.error);
};

export const useCommentUpdateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({
      bookId,
      episodeId,
      commentId,
      reqData,
    }: {
      bookId: number;
      episodeId: string;
      commentId: string;
      reqData: string;
    }) => commentUpdateFetcher(bookId, episodeId, commentId, reqData),
    {
      onError: (error) => {
        return alert(error);
      },
      onSuccess: () => {
        queryClient.invalidateQueries<string>([BOOK_COMMENT_KEY]);
      },
    }
  );
};
