import axios from "axios";
import token from "@/utils/token";

const accessToken = token.get();

const apiAuth = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});
export default apiAuth;

export const apiBook = axios.create({
  baseURL: "http://localhost:8090",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

export const apiBookMultipart = axios.create({
  baseURL: "http://localhost:8090",
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${accessToken}`,
  },
});

// [1] interceptor - axios.create(...) 헤더스 유지돼서 전달되는지(아니라면 대안 사용)

// apiMultipart.interceptors.request.use((config: any) => {
//   return {
//     ...config,
//     // headers: {
//     //   ...config.headers,
//     //   Authorization: `Bearer ${accessToken}`,
//     // },
//   };
// });
