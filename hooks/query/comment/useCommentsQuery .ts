import { useQuery } from "@tanstack/react-query";
import { apiBook } from "@/libs/axios/api";
import { CommentRes } from "@/models/books/comment";
import { BOOK_COMMENT_KEY } from "@/constants/key";

const fetcher = async (
  bookId: number,
  episodeId: string,
  size: number,
  page: number
) => {
  const { data } = await apiBook.get<CommentRes>(
    `/books/${bookId}/episode/${episodeId}/comment`
  );
  return data;
};

const useCommentsQuery = (
  bookId: number,
  episodeId: string,
  size: number,
  page: number
) => {
  return useQuery({
    queryKey: [BOOK_COMMENT_KEY, bookId, episodeId, size, page],
    queryFn: () => fetcher(bookId, episodeId, size, page),
    // enabled: !!page,
  });
};

export default useCommentsQuery;
