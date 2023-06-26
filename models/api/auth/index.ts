import { GenderType } from "@/models/auth";

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
  gender?: GenderType;
  birth?: string;
  createAt?: string;
  updateAt?: string;
  deleteAt?: string;
}

export interface SignUpResponse {
  success: boolean;
}

// NOTE: react-hook-form 입력폼에서 쓸 타입
export interface BookCreateUseFormProps {
  genreIdList?: number[];
  title?: string;
  description?: string;
  coverImages?: FileList;
}

// NOTE: 요청 보낼 때 쓸 타입
export type BookCreateReq = Omit<
  BookCreateUseFormProps,
  "genreIdList" | "coverImages"
> & {
  genreIdList?: string;
  coverImage?: File;
};

export interface BookCreateResponse {
  success: boolean;
}
