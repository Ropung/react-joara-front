import { BOOK_ADD } from "@/constants/key";
import API_PATH from "@/constants/path/api";
import Path from "@/constants/path/routes";
import api from "@/libs/axios/api";
import { BookAddRequest, BookAddResponse } from "@/models/api/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

const { API_BOOKS_ADD } = API_PATH;
const { WRITER_ROOM } = Path;
// 책 추가
const bookAddFetcher = (reqData: BookAddRequest) => {
  return api
    .post<BookAddResponse>(API_BOOKS_ADD, reqData)
    .then(({ data }) => {
      data.success ? alert("성공") : alert("실패");
    })
    .catch(console.error);
};

export const BookAddMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(bookAddFetcher, {
    onError: (error) => {
      return alert(error);
    },
    onSuccess: () => {
      // router.push(WRITER_ROOM);
      queryClient.invalidateQueries<string>([BOOK_ADD]);
    },
  });
};
