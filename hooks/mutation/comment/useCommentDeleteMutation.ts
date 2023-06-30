import {
  COMMENT_DELETE_KEY,
  COMMENT_KEY,
  COMMENT_UPDATE_KEY,
} from "@/constants/key";
import { apiBookMultipart } from "@/libs/axios/api";
import { CommentDeleteRes } from "@/models/books/comment";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const commentDeleteFetcher = (
  bookId: number,
  episodeId: string,
  commentId: string
) => {
  return apiBookMultipart
    .delete<CommentDeleteRes>(
      `books/${bookId}/episode/${episodeId}/comment/${commentId}}`
    )
    .then(({ data }) => {})
    .catch(console.error);
};

export const useCommentDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({
      bookId,
      episodeId,
      commentId,
    }: {
      bookId: number;
      episodeId: string;
      commentId: string;
    }) => commentDeleteFetcher(bookId, episodeId, commentId),
    {
      onError: (error) => {
        return alert(error);
      },
      onSuccess: () => {
        queryClient.invalidateQueries<string>([COMMENT_DELETE_KEY]);
      },
    }
  );
};
