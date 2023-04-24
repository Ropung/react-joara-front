export interface BookGenreProps {
  bookGenreId?: string;
  genreName?: string;
}

export interface BookProps {
  bookId?: string;
  memberId?: string;
  genreId?: string;
  bookTitle?: string;
  bookDescription?: string;
  bookCover?: string;
  avgScore?: number;
  ISBN_CIP?: string;
  createAt?: string;
  updateAt?: string;
  deleteAt?: string;
}
export interface BookTagProps {
  tagId: string;
  bookId: string;
}
