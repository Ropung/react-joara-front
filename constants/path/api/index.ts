const API_PATH = {
  // Auth
  API_LOGIN: "/login",
  API_SIGNUP: "/sign-up",

  // Member
  // API_MEMBER: "/members",
  API_MEMBER_PROFILE: "/members/me",

  // GENRE
  API_GENRE: "/genre",

  // Books
  API_GENRE_BOOK: "/books/genre",
  API_BOOK: "/books",
  API_BOOK_ME: "/books/me",
  API_BOOK_FAVOR: "/books/favorite",
  API_BOOK_RECOMMEND: "/books",

  API_BOOK_CREATE: "/books",
  API_BOOK_UPDATE: "/books/",
  API_BOOK_DELETE: "/books/",

  // Episodes
  API_EPISODE: "/episode",
  API_EPISODE_CREATE: "/episode",
  API_EPISODE_UPDATE: "/episode/",
  API_EPISODE_DELETE: "/episode/",

  // Comment
  API_COMMENT: "/comment",
  API_COMMENT_CREATE: "/comment",
  API_COMMENT_UPDATE: "/comment/",
  API_COMMENT_DELETE: "/comment/",

  // Reply
  API_REPLY: "/reply",
  API_REPLY_CREATE: "/reply",
  API_REPLY_UPDATE: "/reply/",
  API_REPLY_DELETE: "/reply/",

  // API_CREATE_PROFILE_IMAGE: "/users/img",
  // API_UPDATE_USER_INFO: "/users/update",
  // API_UPDATE_PROFILE_IMAGE: "/users/img/update",
} as const;

Object.freeze(API_PATH);

export default API_PATH;
