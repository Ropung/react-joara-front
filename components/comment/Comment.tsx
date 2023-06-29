import {
  useState,
  useRef,
  MutableRefObject,
  ChangeEvent,
  useEffect,
} from "react";
import Path from "@/constants/path/routes";
import { useRouter } from "next/router";
import CommentItem from "./widgets/CommentItem";
import { SomeIdUnion } from "@/models/type";
import { useCommentCreateMutation } from "@/hooks/mutation/comment/useCommentCreateMutation";
import { useCommentUpdateMutation } from "@/hooks/mutation/comment/useCommentUpdateMutation";
import { useCommentDeleteMutation } from "@/hooks/mutation/comment/useCommentDeleteMutation";
import { CommentCreateReq } from "@/models/books/comment";
import useCommentsQuery from "@/hooks/query/comment/useCommentsQuery ";
import { Size } from "@/constants/genre";

const Comment = () => {
  const router = useRouter();
  const {} = Path;

  const [commentValue, setCommentValue] = useState<CommentCreateReq>({});

  const { bid, eid } = router.query as { [key in SomeIdUnion]: string };
  const commentCreateRef = useRef<HTMLTextAreaElement>(null);

  const { data: { commentList, lastPage } = {} } = useCommentsQuery(
    Number(bid),
    eid,
    Size.TEN,
    1
  );
  const { mutate: commentCreateMutation } = useCommentCreateMutation();
  const { mutate: commentUpdateMutation } = useCommentUpdateMutation();
  const { mutate: commentDeleteMutation } = useCommentDeleteMutation();

  console.log(commentList);

  const handleCreateSubmit = () => {
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

  const handleCommentValueChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    const id = evt.target?.id;

    setCommentValue((prevEpiValue: CommentCreateReq) => ({
      ...prevEpiValue,
      [id]: val,
    }));
  };

  return (
    <section className="flex flex-col w-full gap-4">
      <h1>
        댓글<span className="font-bold text-main">({-1})</span>
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
        <CommentItem
          key={"comment.id"}
          id={1}
          idx={1}
          boardId={"props.boardId"}
          content={"comment.content"}
          userId={"userId"}
          commentUserInfo={"comment.users"}
        />
        <CommentItem
          key={"comment.id"}
          id={1}
          idx={1}
          boardId={"props.boardId"}
          content={"comment.content"}
          userId={"userId"}
          commentUserInfo={"comment.users"}
        />
        <CommentItem
          key={"comment.id"}
          id={1}
          idx={1}
          boardId={"props.boardId"}
          content={"comment.content"}
          userId={"userId"}
          commentUserInfo={"comment.users"}
        />
      </ul>
    </section>
  );
};

export default Comment;
