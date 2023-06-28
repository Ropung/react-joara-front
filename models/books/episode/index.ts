import { EpisodeStatusType } from "../../type";

//  -------------------------------[Command]--------------------------------- //

//  -------------------------------[Query]--------------------------------- //

// Episode
export interface EpisodeReadRes {
  bookTitle?: string;
  epiTitle?: string;
  content?: string;
}
export interface EpisodeDetailedRes {
  episodeList?: EpisodeDetailedProps[];
  lastPage?: number;
}
export interface EpisodeDetailedProps {
  id?: string;
  bookId?: number;
  epiNum?: number;
  nickname?: string;
  epiTitle?: string;
  viewCount?: number;
  heartCount?: number;
  status?: EpisodeStatusType;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

// Comment
export interface EpisodeCommentRes {}
export interface EpisodeCommentProps {}
// Reply
export interface EpisodeReplyRes {}
export interface EpisodeReplyProps {}
