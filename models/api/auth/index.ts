import { MemberGender, MemberState } from "@/models/auth";

export interface LoginRequest {
  email: string;
  password: string;
}
export interface LoginResponse {
  token: string;
}

export interface SignUpRequest {
  email?: string;
  password?: string;
  passwordConfirm?: string;
  name?: string;
  nickname?: string;
  phone?: string;
  gender?: MemberGender;
  birth?: string;
  createAt?: string;
  updateAt?: string;
  deleteAt?: string;
  status?: MemberState;
}

export interface SignUpResponse {
  success: boolean;
}

export interface BookAddRequest {
  genreId?: string;
  title?: string;
  description?: string;
  coverUrl?: string;
  avgScore?: number;
  isbn?: string;
  cip?: string;
}
export interface BookAddResponse {
  success: boolean;
}
