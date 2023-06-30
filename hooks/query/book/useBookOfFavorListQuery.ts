import { useQuery } from "@tanstack/react-query";
import { apiBook } from "@/libs/axios/api";
import API_PATH from "@/constants/path/api";

import { FavorBookListDetailedRes } from "@/models/books/book";
import { BOOK_FAVORITE_LIST_KEY } from "@/constants/key";

const { API_BOOK_FAVOR } = API_PATH;

const fetcher = async () => {
  const { data } = await apiBook.get<FavorBookListDetailedRes>(
    `${API_BOOK_FAVOR}`
  );
  return data;
};

const useBookOfFavorListQuery = () => {
  return useQuery({
    queryKey: [BOOK_FAVORITE_LIST_KEY],
    queryFn: () => fetcher(),
    // enabled: !!page,
  });
};

export default useBookOfFavorListQuery;
