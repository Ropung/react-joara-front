import { useState, useRef, MutableRefObject } from "react";
import Path from "@/constants/path/routes";
import { useRouter } from "next/router";
import CommentItem from "./widgets/CommentItem";
import { SomeIdUnion } from "@/models/type";

const Comment = () => {
  const router = useRouter();
  const {} = Path;

  const { bid, eid } = router.query as { [key in SomeIdUnion]: string };
  const commentCreateRef = useRef<HTMLTextAreaElement>(null);

  // const { mutate: episodeDeleteMutation } = useEpisodeDeleteMutation();

  // const handleSubmit = () => {
  //   if (!bid || !eid) return;
  //   episodeDeleteMutation(
  //     { bid: Number(bid), eid },
  //     {
  //       onSuccess: () => {
  //         alert("삭제 되었습니다.");
  //         router.push(`${BOOK}/${bid}`);
  //       },
  //       onError: (e) => {
  //         alert(e);
  //       },
  //     }
  //   );
  // };

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
        />
        <button
          className="basis-[120px] shrink-0 border-black rounded-xl bg-main/50 hover:bg-main font-bold"
          // onClick={}
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
