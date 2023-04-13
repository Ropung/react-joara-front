class Token {
  getToken(key: string) {
    return localStorage.getItem(key);
  }
  setToken(key: string, token: string) {
    localStorage.setItem(key, token);
  }
  removeToken(key: string) {
    localStorage.removeItem(key);
  }
}
export default new Token();
