const Path = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  BOOK: "/book/[bid]",
  EPISODE: "/book/[bid]/episode/[eid]",
  WRITER_ROOM: "/writer-room",
  BOOK_PUBLISH: "/book-publish",
  BOOK_EPISODE_PUBLISH: "/book-publish/[bid]/episode",
  BOOK_UPDATE_PUBLISH: "/book-publish/[bid]",
  BOOK_UPDATE_EPISODE_PUBLISH: "/book-publish/[bid]/episode/[eid]",
};

Object.freeze(Path);

export default Path;
