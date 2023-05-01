const API_PATH = {
  API_LOGIN: "/login",
  API_SIGNUP: "/signup",
  API_BOOKS_ADD: "/books/add",
} as const;

Object.freeze(API_PATH);

export default API_PATH;
