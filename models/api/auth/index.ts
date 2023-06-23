import { MemberGender } from "@/models/auth";

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
}

export interface SignUpResponse {
  success: boolean;
}

// NOTE: 입력폼에서 쓸 타입
export interface BookAddFormState {
  coverImages?: FileList;
  genreId?: string;
  title?: string;
  description?: string;
  isbn?: string;
  cip?: string;
}
// NOTE: 요청 보낼 때 쓸 타입
export type BookAddRequest = Omit<BookAddFormState, "coverImages"> & {
  coverImage?: File;
};

export interface BookAddResponse {
  success: boolean;
}
