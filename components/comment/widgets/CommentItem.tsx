import React, { FC, useState } from "react";
import { RiDeleteBin5Line, RiEditBoxLine } from "react-icons/ri";
import api from "@/libs/axios/api";
import { FaUserCircle } from "react-icons/fa";
import { dateParse } from "@/utils/common/parser";
import { CommentRes, CommentStatus } from "@/models/books/comment";

interface CommentItemProps {
  key?: string;
  id?: string;
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
    id,
    key,
    memberId,
    nickname,
    status,
    updatedAt,
  } = props;

  const [commentContent, setCommentContent] = useState<string>(content ?? "");
  const [isCommentEdit, setIsCommentEdit] = useState<boolean>(false);

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === "Enter") {
      handleUpdateComment();
    }
  };

  const handleUpdateComment = async () => {
    setIsCommentEdit(!isCommentEdit);

    // isCommentEdit &&
    //   (await api
    //     .put<StatusResponse>(`${API_COMMENT_UPDATE}/${props.id}`, {
    //       content: commentContent,
    //     })
    //     .then((res) => console.log(res))
    //     .catch((error) => console.log(error)));
  };

  const handleDeleteComment = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    // if (confirm("정말로 삭제 하시겠습니까?")) {
    //   await api
    //     .delete<StatusResponse>(`${API_COMMENT_DELETE}/${props.id}`)
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((error) => console.log(error));
    // }
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
