import { BOOK_KEY, BOOK_UPDATE_KEY } from "@/constants/key";
import API_PATH from "@/constants/path/api";
import Path from "@/constants/path/routes";
import { apiBook, apiBookMultipart } from "@/libs/axios/api";
import {
  BookDeleteRes,
  BookUpdateReq,
  BookUpdateRes,
} from "@/models/books/book";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const { API_BOOK_DELETE } = API_PATH;
const { BOOK_ME } = Path;

const bookDeleteFetcher = async (bookId: number) => {
  const { data: result } = await apiBook.delete<BookDeleteRes>(
    API_BOOK_DELETE,
    { data: { bookId } }
  );
  return result;
};

export const useBookDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(bookDeleteFetcher, {
    onError: (error) => {
      return alert(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries<string>([BOOK_KEY]);
    },
  });
};
