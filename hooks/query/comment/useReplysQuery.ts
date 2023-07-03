import { useQuery } from "@tanstack/react-query";
import { apiBook } from "@/libs/axios/api";
import { CommentRes } from "@/models/books/comment";
import { BOOK_COMMENT_KEY } from "@/constants/key";
import { ReplyRes } from "@/models/books/reply";

const fetcher = async (
  bid: number,
  eid: string,
  cid: string,
  size?: number,
  page?: number
) => {
  const { data } = await apiBook.get<ReplyRes>(
    `/books/${bid}/episode/${eid}/comment/${cid}/reply`
  );
  return data;
};

const useReplysQuery = (
  bid: number,
  eid: string,
  cid: string,
  size?: number,
  page?: number
) => {
  // console.log(bid, eid, cid);

  return useQuery({
    queryKey: [BOOK_COMMENT_KEY],
    queryFn: () => fetcher(bid, eid, cid, size ?? 5, page ?? 1),
    // enabled: !!page,
  });
};

export default useReplysQuery;
