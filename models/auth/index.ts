import { GenderType } from "@/models/member";

// 로그인
export interface LoginReq {
  email: string;
  password: string;
}
export interface LoginRes {
  token: string;
}

// 회원가입
export interface SignUpReq {
  email?: string;
  password?: string;
  passwordConfirm?: string;
  name?: string;
  nickname?: string;
  phone?: string;
  gender?: GenderType;
  birth?: string;
  createAt?: string;
  updateAt?: string;
  deleteAt?: string;
}

export interface SignUpRes {
  success: boolean;
}

// TODO: 리프레시 토큰 & Oauth
// export interface RefreshTokenProps {
//   refreshTokenId?: string;
//   memberId?: string;
//   refreshToken?: string;
//   createAt?: string;
//   deleteAt?: string;
// }
