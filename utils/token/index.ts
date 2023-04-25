const token = {
  get: () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
  },
  set: (token: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
    }
  },
  remove: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
  },
};

export default token;
