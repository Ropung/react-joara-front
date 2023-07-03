import React, { ChangeEvent, FC, useRef, useState } from "react";
import { RiDeleteBin5Line, RiEditBoxLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { dateParse } from "@/utils/common/parser";
import { CommentStatus } from "@/models/books/comment";
import { useCommentUpdateMutation } from "@/hooks/mutation/comment/useCommentUpdateMutation";
import { useCommentDeleteMutation } from "@/hooks/mutation/comment/useCommentDeleteMutation";
import { useRouter } from "next/router";
import { SomeIdUnion } from "@/models/type";
import ReplyItemList from "@/components/reply/ReplyItemList";
import { ReplyCreateReq } from "@/models/books/reply";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import useReplysQuery from "@/hooks/query/comment/useReplysQuery";

interface CommentItemProps {
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
    memberId,
    nickname,
    status,
    updatedAt,
  } = props;

  const [commentContent, setCommentContent] = useState<string>(content ?? "");

  const [isCommentEdit, setIsCommentEdit] = useState<boolean>(false);
  const [moreReply, setMoreReply] = useState<boolean>(false);
  const [commentValue, setCommentValue] = useState<ReplyCreateReq>({});
  const router = useRouter();

  const { bid, eid } = router.query as { [key in SomeIdUnion]: string };
  const { data: { replyList, lastPage } = {} } = useReplysQuery(
    Number(bid),
    eid,
    commentId ?? ""
  );

  const commentCreateRef = useRef<HTMLTextAreaElement>(null);
  const commentUpdateRef = useRef<HTMLTextAreaElement>(null);

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === "Enter") {
      handleUpdateComment();
    }
  };

  const { mutate: commentUpdateMutation } = useCommentUpdateMutation();
  const { mutate: commentDeleteMutation } = useCommentDeleteMutation();

  const handleReplyValueChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    const id = evt.target?.id;

    setCommentValue((prevEpiValue: ReplyCreateReq) => ({
      ...prevEpiValue,
      [id]: val,
    }));
  };

  const handleReplyCreateSubmit = async () => {
    if (!bid || !eid || !commentValue)
      throw new Error("내용이 비었거나 잘못된 요청입니다.");
    // useReplyCreateMutation(
    //   { bookId: Number(bid), episodeId: eid, commentValue },
    //   {
    //     onSuccess: () => {
    //       if (commentCreateRef.current) {
    //         commentCreateRef.current.value = "";
    //       }
    //     },
    //     onError: (e) => {
    //       alert(e);
    //     },
    //   }
    // );
  };

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
    <li key={`comment-${commentId}`} className={`border-t`}>
      <div className="flex justify-between p-2">
        <div className="flex flex-col w-full gap-4">
          <figure className="flex justify-between w-full">
            <div className="flex flex-row items-center gap-4">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex justify-center items-center bg-gray-300 shadow-lg p-[1px] mr-4">
                <FaUserCircle className="text-[120px] text-white" />
              </div>
              <figcaption className="flex flex-row items-center gap-2">
                <p className="text-lg font-semibold text-main">{nickname}</p>
              </figcaption>
            </div>
            <div className="flex items-center gap-2">
              <small className="text-sm text-gray-400">
                {dateParse(createdAt ?? "")}
              </small>
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
              ref={commentUpdateRef}
              onChange={(e) => setCommentContent(e.target.value)}
              onKeyDown={handleOnKeyDown}
            />
          ) : (
            <p className="p-2 pr-4">{commentContent}</p>
          )}
          <div className="flex items-center justify-end">
            <p
              className="flex flex-row items-center gap-2 cursor-pointer"
              onClick={() => {
                setMoreReply(!moreReply);
              }}
            >
              <span> 답글달기</span>
              <AiFillCaretUp
                className={`duration-200 ${moreReply && "rotate-180"}`}
              />
            </p>
          </div>
          {/* 대댓글 입력영역 */}
          {moreReply ? (
            <div className="min-h-[70px] flex justify-between gap-2">
              <textarea
                id="content"
                className="flex-auto w-full px-2 py-1 text-sm border rounded-sm focus:outline-none focus:border-main rounded-l-md"
                ref={commentCreateRef}
                placeholder="댓글을 입력해주세요."
                onChange={(e) => {
                  handleReplyValueChange(e);
                }}
              />
              <button
                className="basis-[120px] shrink-0 border-black rounded-xl bg-main/50 hover:bg-main font-bold"
                onClick={handleReplyCreateSubmit}
              >
                대댓글 쓰기
              </button>
            </div>
          ) : (
            <br />
          )}

          {/* 대댓글 */}
          <ReplyItemList replyList={replyList} />
        </div>
      </div>
    </li>
  );
};

export default CommentItem;
