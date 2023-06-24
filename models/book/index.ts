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
