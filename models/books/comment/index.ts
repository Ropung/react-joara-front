// -----------------------------[ Command] -----------------------------------//

export interface CommentCreateReq {
  content?: string;
}
export interface CommentUpdateReq {
  content?: string;
}

export interface CommentCreateRes {
  success: boolean;
}
export interface CommentUpdateRes {
  success: boolean;
}
export interface CommentDeleteRes {
  success: boolean;
}

//  -------------------------------[Query]--------------------------------- //
export interface CommentRes {
  commentList: CommentProps[];

  lastPage: number;
}
export interface CommentProps {
  id?: string;
  epiId?: string;
  memberId?: string;
  nickname?: string;
  content?: string;
  status?: CommentStatus;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export type CommentStatus = "PENDING" | "ACTIVE" | "BLOCK" | "REMOVED";
