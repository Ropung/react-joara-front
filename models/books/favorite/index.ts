export interface FavoriteCreateReq {
  bookId: number;
}
export interface FavoriteDeleteReq {
  bookId: number;
}

export interface FavoriteCreateRes {
  success: boolean;
}
export interface FavoriteDeleteRes {
  success: boolean;
}
