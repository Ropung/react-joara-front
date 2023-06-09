import { useState, useRef, ChangeEvent } from "react";
import { useRouter } from "next/router";
import CommentItem from "./widgets/CommentItem";
import { SomeIdUnion } from "@/models/type";
import { useCommentCreateMutation } from "@/hooks/mutation/comment/useCommentCreateMutation";
import { CommentCreateReq } from "@/models/books/comment";
import { Size } from "@/constants/genre";
import useCommentsQuery from "@/hooks/query/comment/useCommentsQuery ";

const Comment = () => {
  const router = useRouter();
  const { bid, eid } = router.query as { [key in SomeIdUnion]: string };
  const commentCreateRef = useRef<HTMLTextAreaElement>(null);

  const { data: { commentList, lastPage } = {} } = useCommentsQuery(
    Number(bid),
    eid,
    Size.TWENTY,
    1
  );
  // console.log(commentList);

  const [commentValue, setCommentValue] = useState<CommentCreateReq>({});
  const handleCommentValueChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    const id = evt.target?.id;

    setCommentValue((prevEpiValue: CommentCreateReq) => ({
      ...prevEpiValue,
      [id]: val,
    }));
  };
  const { mutate: commentCreateMutation } = useCommentCreateMutation();
  const handleCreateSubmit = async () => {
    if (!bid || !eid || !commentValue)
      throw new Error("내용이 비었거나 잘못된 요청입니다.");
    commentCreateMutation(
      { bookId: Number(bid), episodeId: eid, commentValue },
      {
        onSuccess: () => {
          if (commentCreateRef.current) {
            commentCreateRef.current.value = "";
          }
        },
        onError: (e) => {
          alert(e);
        },
      }
    );
  };

  return (
    <section className="flex flex-col w-full gap-4">
      <h1>
        댓글
        <span className="font-bold text-main">
          ({commentList?.length ?? 0})
        </span>
      </h1>
      {/* 댓글 입력영역 */}
      <div className="min-h-[70px] flex justify-between gap-2">
        <textarea
          id="content"
          className="flex-auto w-full px-2 py-1 text-sm border rounded-sm focus:outline-none focus:border-main rounded-l-md"
          ref={commentCreateRef}
          placeholder="댓글을 입력해주세요."
          onChange={(e) => {
            handleCommentValueChange(e);
          }}
        />
        <button
          className="basis-[120px] shrink-0 border-black rounded-xl bg-main/50 hover:bg-main font-bold"
          onClick={handleCreateSubmit}
        >
          댓글 쓰기
        </button>
      </div>

      {/* 댓글 영역 */}
      <ul className="flex flex-col w-full gap-4">
        {commentList?.map((comment) => {
          return (
            <CommentItem
              key={`commentId${comment.id}`}
              commentId={comment.id}
              epiId={comment.epiId}
              memberId={comment.memberId}
              nickname={comment.nickname}
              content={comment.content}
              status={comment.status}
              createdAt={comment.createdAt}
              updatedAt={comment.updatedAt}
              deletedAt={comment.deletedAt}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Comment;
