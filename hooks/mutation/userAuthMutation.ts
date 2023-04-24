import { AUTH_KEY } from "@/constants/key";
import API_PATH from "@/constants/path/api";
import Path from "@/constants/path/routes";
import api from "@/libs/axios/api";
import token from "@/libs/token";
import {
  LoginRequest,
  LoginResponse,
  SignupRequest,
  SignupResponse,
} from "@/models/api/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

const { API_LOGIN, API_SIGNUP } = API_PATH;
const { HOME, LOGIN } = Path;

// 로그인
const loginFetcher = (reqData: LoginRequest) => {
  return api
    .post<LoginResponse>(API_LOGIN, reqData)
    .then(({ data }) => {
      token.set(data.token);
    })
    .catch(console.error);
};

export const useUserLoginMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(loginFetcher, {
    onError: (error) => {
      return alert(error);
    },
    onSuccess: () => {
      if (token.get() == null || token.get()?.length === 0) {
        return alert("인가되지 않은 사용자입니다.");
      }
      alert("로그인 성공");
      router.push(HOME);
      queryClient.invalidateQueries<string>([AUTH_KEY]);
    },
  });
};

// 회원가입
const signupFetcher = (reqData: SignupRequest) => {
  return api
    .post<SignupResponse>(API_SIGNUP, reqData)
    .then(({ data }) => data)
    .catch(console.error);
};

export const useUserSignupMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(signupFetcher, {
    onError: (error) => {
      alert("회원가입에 실패 하셨습니다.");
      return error;
    },
    onSuccess: () => {
      alert("회원가입 성공");
      router.push(LOGIN);
      queryClient.invalidateQueries<string>([AUTH_KEY]);
    },
  });
};
