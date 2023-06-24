import { BOOK_ADD } from "@/constants/key";
import API_PATH from "@/constants/path/api";
import Path from "@/constants/path/routes";
import { apiBook } from "@/libs/axios/api";
import { BookAddRequest, BookAddResponse } from "@/models/api/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const { API_BOOK_CREATE } = API_PATH;
const { BOOK_ME } = Path;
// 책 추가
const bookAddFetcher = (reqData: BookAddRequest) => {
  return apiBook
    .post<BookAddResponse>(API_BOOK_CREATE, reqData)
    .then(({ data }) => {
      if (data.success) {
        data.success && alert("책이 등록되었습니다.");
        window.location.href = BOOK_ME;
      }
    })
    .catch(console.error);
};

export const useBookMutation = () => {
  const queryClient = useQueryClient();
  // const router = useRouter();

  return useMutation(bookAddFetcher, {
    onError: (error) => {
      return alert(error);
    },
    onSuccess: () => {
      // router.push(BOOK_ME);
      queryClient.invalidateQueries<string>([BOOK_ADD]);
    },
  });
};
