import { useQuery } from "@tanstack/react-query";
import { apiBook } from "@/libs/axios/api";
import API_PATH from "@/constants/path/api";
import { AUTH_KEY, BOOK_KEY } from "@/constants/key";
import token from "@/utils/token";
import { FavorBookListDetailedRes } from "@/models/books/book";

const { API_BOOK_FAVOR } = API_PATH;

const fetcher = async () => {
  const { data } = await apiBook.get<FavorBookListDetailedRes>(
    `${API_BOOK_FAVOR}`
  );
  return data;
};

const useBookOfFavorListQuery = () => {
  return useQuery({
    queryKey: [BOOK_KEY, AUTH_KEY, token.get],
    queryFn: () => fetcher(),
    // enabled: !!page,
  });
};

export default useBookOfFavorListQuery;
