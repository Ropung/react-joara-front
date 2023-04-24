export interface MemberProps {
  memberId?: string;
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

export type MemberState = "ACTION" | "SLEEP" | "BLOCK";
export type GenreState = "A" | "R" | "H";
export type MemberGender = "M" | "W";
