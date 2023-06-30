import React, { FC, useRef, useState } from "react";
import { RiDeleteBin5Line, RiEditBoxLine } from "react-icons/ri";
import api from "@/libs/axios/api";
import { FaUserCircle } from "react-icons/fa";
import { dateParse } from "@/utils/common/parser";
import { CommentRes, CommentStatus } from "@/models/books/comment";
import { useCommentUpdateMutation } from "@/hooks/mutation/comment/useCommentUpdateMutation";
import { useCommentDeleteMutation } from "@/hooks/mutation/comment/useCommentDeleteMutation";
import { useRouter } from "next/router";
import Path from "@/constants/path/routes";
import { SomeIdUnion } from "@/models/type";

interface CommentItemProps {
  key?: string;
  commentId?: string;
  epiId?: string;
  memberId?: string;
  nickname?: string;
  content?: string;
  status?: CommentStatus;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

const CommentItem: FC<CommentItemProps> = (props) => {
  const {
    content,
    createdAt,
    deletedAt,
    epiId,
    commentId,
    key,
    memberId,
    nickname,
    status,
    updatedAt,
  } = props;

  const [commentContent, setCommentContent] = useState<string>(content ?? "");
  const [isCommentEdit, setIsCommentEdit] = useState<boolean>(false);

  const router = useRouter();
  const {} = Path;

  const { bid, eid } = router.query as { [key in SomeIdUnion]: string };

  const commentUpdataRef = useRef<HTMLTextAreaElement>(null);

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === "Enter") {
      handleUpdateComment();
    }
  };

  const { mutate: commentUpdateMutation } = useCommentUpdateMutation();
  const { mutate: commentDeleteMutation } = useCommentDeleteMutation();

  const handleUpdateComment = async () => {
    if (!bid || !epiId || !commentId || !commentContent)
      throw new Error("내용이 비었거나 잘못된 요청입니다.");

    setIsCommentEdit(!isCommentEdit);

    isCommentEdit &&
      commentUpdateMutation(
        {
          bookId: Number(bid),
          episodeId: epiId,
          commentId: commentId,
          reqData: commentContent,
        },
        {
          onSuccess: () => {},
          onError: (e) => {
            alert(e);
          },
        }
      );
  };
  const handleDeleteComment = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (!bid || !eid || !commentId) throw new Error("잘못된 요청입니다.");
    if (!confirm("정말로 삭제 하시겠습니까?")) return;
    commentDeleteMutation(
      {
        bookId: Number(bid),
        episodeId: epiId ?? "",
        commentId: commentId ?? "",
      },
      {
        onSuccess: () => {},
        onError: (e) => {
          alert(e);
        },
      }
    );
  };

  return (
    <li key={key} className={`"border-t"}`}>
      <div className="flex justify-between p-2">
        <div className="flex flex-col w-full gap-4">
          <figure className="flex justify-between w-full">
            <div className="flex flex-row items-center gap-4">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex justify-center items-center bg-gray-300 shadow-lg p-[1px] mr-4">
                <FaUserCircle className="text-[120px] text-white" />
              </div>
              <figcaption className="flex flex-row items-center gap-2">
                <p className="text-lg font-semibold text-main">{nickname}</p>
                <small className="text-sm text-gray-400">
                  {dateParse(createdAt ?? "")}
                </small>
              </figcaption>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="flex items-center justify-center text-2xl text-main"
                onClick={handleUpdateComment}
              >
                <RiEditBoxLine />
              </button>
              <button
                className="flex items-center justify-center text-2xl text-red-400"
                onClick={handleDeleteComment}
              >
                <RiDeleteBin5Line />
              </button>
            </div>
          </figure>

          {isCommentEdit ? (
            <textarea
              className="w-full p-2 border rounded-md focus:outline-none focus:border-main"
              defaultValue={commentContent}
              ref={commentUpdataRef}
              onChange={(e) => setCommentContent(e.target.value)}
              onKeyDown={handleOnKeyDown}
            />
          ) : (
            <p className="p-2 pr-4">{commentContent}</p>
          )}
        </div>
      </div>
    </li>
  );
};

export default CommentItem;
