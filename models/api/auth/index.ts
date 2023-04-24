import { MemberGender, MemberState } from "@/models/auth";

export interface LoginRequest {
  email: string;
  password: string;
}
export interface LoginResponse {
  token: string;
}

export interface SignupRequest {
  email?: string;
  password?: string;
  passwordConfirm?: string;
  name?: string;
  nickName?: string;
  phone?: string;
  gender?: MemberGender;
  birth?: string;
  createAt?: string;
  updateAt?: string;
  deleteAt?: string;
  status?: MemberState;
}

export interface SignupResponse {
  success: boolean;
}
