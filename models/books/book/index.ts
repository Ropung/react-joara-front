// -----------------------------[ Command] -----------------------------------//

import { BookStatusType } from "@/models/type";
export interface BookCreateFormProps {
  genreIdList?: number[];
  title?: string;
  description?: string;
  coverImages?: FileList;
}
export type BookCreateReq = Omit<
  BookCreateFormProps,
  "genreIdList" | "coverImages"
> & {
  genreIdList?: string;
  coverImage?: File;
};
export interface BookUpdateFormProps {
  genreIdList?: number[];
  title?: string;
  description?: string;
  coverImages?: FileList;
}
export type BookUpdateReq = Omit<
  BookUpdateFormProps,
  "genreIdList" | "coverImages"
> & {
  genreIdList?: string;
  coverImage?: File;
  bookId?: number;
};
export interface BookCreateResponse {
  success: boolean;
}
export interface BookUpdateRes {
  success: boolean;
}
export interface BookDeleteRes {
  success: boolean;
}

// Query ----------------------------------------------------------------//

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
  books: RecommendedBooksQueryProps[];
}
export interface RecommendedBooksQueryProps {
  id?: number;
  genreIdList?: number[];
  genreNameList?: string[];
  episodeSize?: number;
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
