const Path = {
  HOME: "/",
  LOGIN: "/login",
  SIGN_UP: "/signup",

  WRITER_ROOM: "/writer-room",

  GENRE: "/genre/[gid]",
  GENRE_MORE: "/genre/",

  BOOK: "/books",
  BOOK_ONE: "/books/[bId]",
  BOOK_PUBLISH: "/publish",
  BOOK_UPDATE_PUBLISH: "/publish/[bid]",
  BOOK_EPISODE_PUBLISH: "/publish/[bid]/episode",
  BOOK_UPDATE_EPISODE_PUBLISH: "/publish/[bid]/episode/[eid]",

  EPISODE: "/books/[bId]/episode/[eid]",
} as const;

Object.freeze(Path);

export default Path;
