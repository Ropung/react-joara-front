import {
  BOOK_COMMENT_KEY,
  BOOK_FAVORITE_LIST_KEY,
  BOOK_MY_LIST_KEY,
  MEMBER_PROFILE_KEY,
} from "@/constants/key";
import API_PATH from "@/constants/path/api";
import Path from "@/constants/path/routes";
import apiAuth from "@/libs/axios/api";
import { LoginReq, LoginRes, SignUpReq, SignUpRes } from "@/models/auth";
import token from "@/utils/token";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const { API_LOGIN, API_SIGNUP } = API_PATH;
const { HOME, LOGIN } = Path;

// 로그인
const loginFetcher = (reqData: LoginReq) => {
  return apiAuth
    .post<LoginRes>(API_LOGIN, reqData)
    .then(({ data }) => {
      token.set(data.token);
      if (data.token.length > 0) {
        window.location.href = HOME;
      }
    })
    .catch(console.error);
};

export const useUserLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(loginFetcher, {
    onError: (error) => {
      return alert(error);
    },
    onSuccess: () => {
      if (token.get() == null || token.get()?.length === 0) {
        return alert(
          "사용자 정보가 존재하지않습니다. 회원가입또는 아이디 비밀번호를 확인해주세요. "
        );
      }
      queryClient.invalidateQueries<string>([MEMBER_PROFILE_KEY]);
      queryClient.invalidateQueries<string>([BOOK_MY_LIST_KEY]);
      queryClient.invalidateQueries<string>([BOOK_FAVORITE_LIST_KEY]);
      queryClient.invalidateQueries<string>([BOOK_COMMENT_KEY]);
    },
  });
};

// 회원가입
const signUpFetcher = (reqData: SignUpReq) => {
  return apiAuth
    .post<SignUpRes>(API_SIGNUP, reqData)
    .then(({ data }) => {
      if (data.success) {
        alert("회원가입 되셨습니다. 가입하신 계정으로 로그인 해주세요");
        window.location.href = LOGIN;
      }
    })
    .catch(() => {
      alert("회원가입을 실패하였습니다 중복된 정보가 입력되였습니다.");
      console.error;
    });
};

export const useUserSignUpMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(signUpFetcher, {
    onError: (error) => {
      return error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries<string>([MEMBER_PROFILE_KEY]);
    },
  });
};
