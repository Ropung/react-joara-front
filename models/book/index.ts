export interface GenreListRes {
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
export interface BookDetailedReq {
  book?: BookDetailedProps;
}
export interface EpisodeDetailedReq {
  episodeList?: EpisodeDetailedProps[];
  lastPage?: number;
}
export interface BookDetailedProps {
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
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  score?: number;
}
export interface EpisodeReadReq {
  bookTitle?: string;
  epiTitle?: string;
  content?: string;
}

export interface EpisodeDetailedProps {
  id?: string;
  bookId?: number;
  epiNum?: number;
  nickname?: string;
  epiTitle?: string;
  viewCount?: number;
  heartCount?: number;
  status?: EpisodeStatusType;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export type BookStatusType =
  | "PENDING"
  | "ACTIVE"
  | "SUSPEND"
  | "REMOVED"
  | "BLOCK";
export type EpisodeStatusType =
  | "PENDING"
  | "ACTIVE"
  | "SUSPEND"
  | "REMOVED"
  | "BLOCK";
export type SomeIdUnion = "bid" | "eid" | "gid";
export interface BookTagProps {
  id?: string;
  bookId?: string;
}

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

export interface AsideBookListProps {
  id?: number;
  genreIdList?: number[];
  genreName?: string;
  nickname?: string;
  title?: string;
  coverUrl?: string;
}
