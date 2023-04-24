const token = {
  get: () => localStorage.getItem("token"),
  set: (item: string) => localStorage.setItem("token", item),
  remove: () => localStorage.removeItem("token"),
};

export default token;
