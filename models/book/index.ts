export interface GenreListRes {
  genres: GenreProps[];
}

export interface GenreProps {
  id?: number;
  kor?: string;
  eng?: string;
}

export interface BookDetailedReq {
  book?: BookDetailedProps;
}
export interface MyBookListDetailedReq {
  bookList?: BookDetailedProps[];
  lastPage?: number;
}
export interface FavorBookListDetailedReq {
  memberFavorBookList?: MemberFavorBookProps[];
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
export interface MemberFavorBookProps {
  id: string;
  bookId: number; // add
  genreIdList: number[];
  memberId: string;
  nickname: string;
  bookTitle: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface EpisodeReadReq {
  bookTitle?: string;
  epiTitle?: string;
  content?: string;
}
export interface EpisodeDetailedReq {
  episodeList?: EpisodeDetailedProps[];
  lastPage?: number;
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
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
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
