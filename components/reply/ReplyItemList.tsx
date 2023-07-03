import { useCommentDeleteMutation } from "@/hooks/mutation/comment/useCommentDeleteMutation";
import { ReplyProps } from "@/models/books/reply";
import { dateParse } from "@/utils/common/parser";
import { useRouter } from "next/router";
import React, { FC, useRef, useState } from "react";
import { BsReplyFill } from "react-icons/bs";
import { RiDeleteBin5Line, RiEditBoxLine } from "react-icons/ri";

interface ReplyItemListProps {
  replyList?: ReplyProps[];
}

const ReplyItemList: FC<ReplyItemListProps> = (props) => {
  const { replyList } = props;
  const router = useRouter();
  const [replyContent, setReplyContent] = useState<string>("");

  const [isReplyEdit, setIsReplyEdit] = useState<boolean>(false);
  const replyUpdateRef = useRef<HTMLTextAreaElement>(null);

  const { mutate: replyUpdateMutation } = useCommentDeleteMutation();
  const { mutate: replyDeleteMutation } = useCommentDeleteMutation();

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === "Enter") {
      handleUpdateReply();
    }
  };

  const handleUpdateReply = async () => {
    // if (!bid || !epiId || !commentId || !commentContent)
    //   throw new Error("내용이 비었거나 잘못된 요청입니다.");

    setIsReplyEdit(!isReplyEdit);

    // isReplyEdit &&
    //   replyUpdateMutation(
    //     {
    //       bookId: Number(bid),
    //       episodeId: epiId,
    //       commentId: commentId,
    //     },
    //     {
    //       onSuccess: () => {},
    //       onError: (e) => {
    //         alert(e);
    //       },
    //     }
    //   );
  };
  const handleDeleteReply = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // if (!bid || !eid || !commentId) throw new Error("잘못된 요청입니다.");
    // if (!confirm("정말로 삭제 하시겠습니까?")) return;
    // replyDeleteMutation(
    //   {
    //     bookId: Number(bid),
    //     episodeId: epiId ?? "",
    //     commentId: commentId ?? "",
    //   },
    //   {
    //     onSuccess: () => {},
    //     onError: (e) => {
    //       alert(e);
    //     },
    //   }
    // );
  };

  return (
    <ul className="w-full p-4">
      {replyList?.map((reply) => {
        return (
          <li
            key={`reply-${reply.id}`}
            className="flex flex-row w-full gap-2 p-8 border-t"
          >
            <div className="flex flex-row items-center flex-1 gap-4">
              <figcaption className="flex flex-row items-center w-full gap-2">
                <BsReplyFill className="rotate-180" />
                <p className="text-lg font-semibold text-main whitespace-nowrap">
                  {reply.nickname}
                </p>
                {isReplyEdit ? (
                  <textarea
                    className="w-full p-2 border rounded-md focus:outline-none focus:border-main"
                    defaultValue={reply.content}
                    ref={replyUpdateRef}
                    onChange={(e) => setReplyContent(e.target.value)}
                    onKeyDown={handleOnKeyDown}
                  />
                ) : (
                  <p className="w-full p-2 pr-4">{reply.content}</p>
                )}
              </figcaption>
            </div>
            <div className="flex items-center justify-end gap-2">
              <small className="text-sm text-gray-400">
                {dateParse(reply.createdAt ?? "")}
              </small>
              <button
                className="flex items-center justify-center text-2xl text-main"
                onClick={handleUpdateReply}
              >
                <RiEditBoxLine />
              </button>
              <button
                className="flex items-center justify-center text-2xl text-red-400"
                onClick={handleDeleteReply}
              >
                <RiDeleteBin5Line />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ReplyItemList;
