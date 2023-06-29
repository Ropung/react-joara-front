import React, { useState } from "react";
import { RiDeleteBin5Line, RiEditBoxLine } from "react-icons/ri";
import api from "@/libs/axios/api";
import { FaUserCircle } from "react-icons/fa";
import { dateParse } from "@/utils/common/parser";

interface CommentProps {
  id: number;
  idx: number;
  content: string;
  userId: string | number;
  commentUserInfo: any;
  boardId: string | number;
}

const CommentItem = (props: CommentProps) => {
  const [commentContent, setCommentContent] = useState<string>(props.content);
  const [isCommentEdit, setIsCommentEdit] = useState<boolean>(false);

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      handleUpdateComment();
    }
  };

  const handleUpdateComment = async () => {
    setIsCommentEdit(!isCommentEdit);

    // isCommentEdit &&
    //   (await api
    //     .patch<StatusResponse>(`${API_COMMENT_UPDATE}/${props.id}`, {
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
    <li key={props.id} className={`${props.idx && "border-t"}`}>
      <div className="flex justify-between p-2">
        <div className="flex flex-col w-full">
          <figure className="flex">
            <div>
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex justify-center items-center bg-gray-300 shadow-lg p-[1px] mr-4">
                <FaUserCircle className="text-[120px] text-white" />
              </div>
              <figcaption className="flex flex-col gap-1">
                <p className="text-lg font-semibold text-main">
                  {props.commentUserInfo.name}
                </p>
                <small className="text-sm text-gray-300">
                  {dateParse("2023-06-29 00:00:00.000 +0900")}
                </small>
              </figcaption>
            </div>
          </figure>

          {isCommentEdit ? (
            <input
              className="w-full p-2 border rounded-sm focus:outline-none focus:border-main"
              type="text"
              defaultValue={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
              onKeyDown={handleOnKeyDown}
            />
          ) : (
            <p className="p-2 pr-4">{commentContent}</p>
          )}
        </div>

        <div className="flex items-center">
          <button
            className="flex items-center justify-center text-2xl text-main"
            onClick={handleUpdateComment}
          >
            <RiEditBoxLine />
          </button>
          <button
            className="flex items-center justify-center ml-4 text-2xl text-red-400"
            onClick={handleDeleteComment}
          >
            <RiDeleteBin5Line />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CommentItem;
