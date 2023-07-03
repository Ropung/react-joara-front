// -----------------------------[ Command] -----------------------------------//
export interface ReplyCreateUseFormProps {}
export interface ReplyUpdateUseFormProps {}

export type ReplyCreateReq = {
  content?: string;
};
export interface ReplyUpdateReq {
  content?: string;
}

export interface ReplyCreateRes {
  success: boolean;
}
export interface ReplyUpdateRes {
  success: boolean;
}
export interface ReplyDeleteRes {
  success: boolean;
}

//  -------------------------------[Query]--------------------------------- //
export interface ReplyRes {
  replyList: ReplyProps[];
  lastPage: number;
}
export interface ReplyProps {
  id?: string;
  commentId?: string;
  memberId?: string;
  nickname?: string;
  content?: string;
  status?: ReplyStatus;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export type ReplyStatus = "PENDING" | "ACTIVE" | "BLOCK" | "REMOVED";
