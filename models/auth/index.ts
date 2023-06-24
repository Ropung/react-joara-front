export interface MemberProfileRes {
  memberId?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
  name?: string;
  nickName?: string;
  phone?: string;
  gender?: GenderType;
  birth?: string;
  createAt?: string;
  updateAt?: string;
  deleteAt?: string;
  status?: MemberState;
}

export interface MemberProfileInfoRes {
  profile: MemberProfileInfo;
}

export interface MemberProfileInfo {
  email?: string;
  name?: string;
  nickname?: string;
  phone?: string;
  gender?: GenderType;
  birth?: string;
  tier?: TierType;
}
export type AccountStatus =
  | "ACTIVE"
  | "SLEEP"
  | "BLOCKED"
  | "REMOVED"
  | "PENDING";
export type MemberState = "ACTION" | "SLEEP" | "BLOCK";
export type GenderType = "M" | "F";
export type TierType = "BRONZE" | "SILVER" | "GOLD" | "DIAMOND";
