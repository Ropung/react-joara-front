import { useQuery } from "@tanstack/react-query";
import { apiBook } from "@/libs/axios/api";
import { COMMENT_KEY } from "@/constants/key";
import { CommentRes } from "@/models/books/comment";

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
    queryKey: [COMMENT_KEY, size, page],
    queryFn: () => fetcher(bookId, episodeId, size, page),
    // enabled: !!page,
  });
};

export default useCommentsQuery;
