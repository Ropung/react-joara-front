export interface GenreListReq {
  genres: GenreProps[];
}

export interface GenreProps {
  id?: number;
  kor?: string;
  eng?: string;
}

export interface BookProps {
  bookId?: string;
  memberId?: string;
  genreId?: string;
  title?: string;
  description?: string;
  cover_url?: string;
  avgScore?: number;
  isbn?: string;
  cip?: string;
  createAt?: string;
  updateAt?: string;
  deleteAt?: string;
}
export interface BookDetailedRes {
  book: BookDetailedProps;
}

export interface BookDetailedProps {
  id?: number;
  genreIdList?: number[];
  // added
  genreNameList?: string[];
  nickname?: string;
  title?: string;
  description?: string;
  coverUrl: string;
  status: BookStatusType;
  totalViewCount: number;
  totalHeartCount: number;
  favorCount: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  score: number;
}

export type BookStatusType = "PENDING" | "ACTIVE" | "SUSPEND" | "REMOVED";
export type SomeIdUnion = "bid" | "eid" | "gid";
export interface BookTagProps {
  id: string;
  bookId: string;
}

export interface PreviewGenreBooksRes {
  bookList: GenreBookProjectionProps[];
  genreId: number;
  lastPage: number;
}
interface GenreBookProjectionProps {
  id: number;
  genreId: number;
  genreName: string;
  nickname: string;
  title: string;
  coverUrl: string;
}
