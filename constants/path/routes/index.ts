const Path = {
  HOME: "/",
  LOGIN: "/login",
  SIGN_UP: "/signup",

  BOOK_ME: "/books/me",
  BOOK_FAVORITE: "/books/favorite",

  GENRE: "/genre/[gid]",
  GENRE_MORE: "/genre/",

  BOOK: "/books",
  BOOK_ONE: "/books/[bId]",
  BOOK_PUBLISH: "/publish",
  BOOK_UPDATE_PUBLISH: "/publish/[bid]",
  BOOK_EPISODE_PUBLISH: "/publish/[bid]/episode",
  EPISODE_UPDATE: "/publish/[bid]/episode/[eid]",

  EPISODE_ONE: "/episode/",
} as const;

Object.freeze(Path);

export default Path;
