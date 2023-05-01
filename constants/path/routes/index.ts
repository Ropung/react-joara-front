const Path = {
  HOME: "/",
  LOGIN: "/login",
  SIGN_UP: "/signup",
  BOOK: "/book/[bid]",
  EPISODE: "/book/[bid]/episode/[eid]",
  WRITER_ROOM: "/writer-room",
  BOOK_PUBLISH: "/publish",
  BOOK_UPDATE_PUBLISH: "/publish/[bid]",
  BOOK_EPISODE_PUBLISH: "/publish/[bid]/episode",
  BOOK_UPDATE_EPISODE_PUBLISH: "/publish/[bid]/episode/[eid]",
} as const;

Object.freeze(Path);

export default Path;
