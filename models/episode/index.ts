export interface EpisodeLoveProps {
  epiLoveId?: string;
  memberId?: string;
  epiId?: string;
}
export interface EpisodeProps {
  epiId?: string;
  bookId?: string;
  epiTitle?: string;
  epiContent?: string;
  epiReview?: string;
  epiCover?: string;
  epiViewCount?: number;
  createAt?: string;
  updateAt?: string;
  deleteAt?: string;
}
export interface EpisodeReplyProps {
  epiReplyId?: string;
  memberId?: string;
  epiId?: string;
  epiReplyContent?: string;
  createAt?: string;
  updateAt?: string;
  deleteAt?: string;
}
export interface EpisodeSubReplyProps {
  epiReplyId?: string;
  memberId?: string;
  epiId?: string;
  epiReplyContent?: string;
  createAt?: string;
  updateAt?: string;
  deleteAt?: string;
}
