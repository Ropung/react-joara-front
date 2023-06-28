// -----------------------------[ Command] -----------------------------------

import { BookStatusType } from "@/models/type";

// CREATE
export interface BookCreateResponse {
  success: boolean;
}
export interface BookCreateUseFormProps {
  genreIdList?: number[];
  title?: string;
  description?: string;
  coverImages?: FileList;
}
// NOTE: 요청 보낼 때 쓸 타입
export type BookCreateReq = Omit<
  BookCreateUseFormProps,
  "genreIdList" | "coverImages"
> & {
  genreIdList?: string;
  coverImage?: File;
};

//UPDATE
export interface BookUpdateReq {}
export interface BookUpdateRes {
  success: boolean;
}
//DELETE
export interface BookDeleteReq {}
export interface BookDeleteRes {
  success: boolean;
}

// Query ----------------------------------------------------------------

// Genre
export interface PreviewGenreBooksRes {
  bookList?: GenreBookProjectionProps[];
  genreId?: number;
  lastPage?: number;
}
export interface GenreBookProjectionProps {
  id?: number;
  genreId?: number;
  genreName?: string;
  nickname?: string;
  title?: string;
  coverUrl?: string;
}

// book
export interface BookDetailedRes {
  book?: BookDetailedViewReadModelProps;
}
export interface MyBookListDetailedRes {
  bookList?: BookDetailedViewReadModelProps[];
  lastPage?: number;
}

// TODO: Recommend
export interface RecommendedBooksQueryRes {
  books: BookListViewReadModelProps[];
}
export interface RecommendedBooksQueryProps {
  id?: number;
  genreIdList?: number[];
  genreName?: string;
  nickname?: string;
  title?: string;
  coverUrl?: string;
}

// Favorite
export interface FavorBookListDetailedRes {
  memberFavorBookList?: MemberFavorBookProps[];
  lastPage?: number;
}
export interface MemberFavorBookProps {
  id: string;
  bookId: number; // add
  genreIdList: number[];
  memberId: string;
  nickname: string;
  bookTitle: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

// Read Model
export interface BookListViewReadModelProps {
  id?: number;
  genreIdList?: number[];
  genreNameList?: string;
  episodeSize?: number;
  nickname?: string;
  title?: string;
  coverUrl?: string;
  score?: number;
}
export interface BookDetailedViewReadModelProps {
  id?: number;
  genreIdList?: number[];
  genreNameList?: string[];
  episodeSize?: number;
  nickname?: string;
  title?: string;
  description?: string;
  coverUrl?: string;
  status?: BookStatusType;
  totalViewCount?: number;
  totalHeartCount?: number;
  favorCount?: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  score?: number;
}
