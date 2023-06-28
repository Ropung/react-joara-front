import { useQuery } from "@tanstack/react-query";
import { apiBook } from "@/libs/axios/api";
import API_PATH from "@/constants/path/api";
import { AUTH_KEY, BOOK_KEY } from "@/constants/key";
import { FavorBookListDetailedReq } from "@/models/book";
import token from "@/utils/token";

const { API_BOOK_FAVOR } = API_PATH;

const fetcher = async () => {
  const { data } = await apiBook.get<FavorBookListDetailedReq>(
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
