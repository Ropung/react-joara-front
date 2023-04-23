const Path = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  BOOK: "/book/[bid]",
  EPISODE: "/book/[bid]/episode/[eid]",
  WRITER_ROOM: "/writer-room",
  BOOK_PUBLISH: "/publish",
  BOOK_UPDATE_PUBLISH: "/publish/[bid]",
  BOOK_EPISODE_PUBLISH: "/publish/[bid]/episode",
  BOOK_UPDATE_EPISODE_PUBLISH: "/publish/[bid]/episode/[eid]",
};

Object.freeze(Path);

export default Path;
