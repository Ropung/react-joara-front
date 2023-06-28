export interface MemberProfileInfoRes {
  profile: MemberProfileInfoProps;
}
export interface MemberProfileInfoProps {
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
