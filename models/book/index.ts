export interface BookGenreProps {
  genreId?: string;
  genreName?: string;
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
