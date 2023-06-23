const API_PATH = {
  // Auth
  API_LOGIN: "/login",
  API_SIGNUP: "/sign-up",

  // Member
  // API_GET_USER_INFO: "/users/info",

  // Books
  API_GENRE_BOOK_PREVIEW: "/books/genre/",
  API_BOOK_PAGINATE: "/books?",
  API_BOOK: "/books",

  API_BOOK_CREATE: "/books",
  API_BOOK_UPDATE: "/books",
  API_BOOK_DELETE: "/books",

  // Episodes

  // API_CREATE_PROFILE_IMAGE: "/users/img",
  // API_UPDATE_USER_INFO: "/users/update",
  // API_UPDATE_PROFILE_IMAGE: "/users/img/update",
} as const;

Object.freeze(API_PATH);

export default API_PATH;
