import { EpisodeStatusType } from "../../type";

// -----------------------------[ Command] -----------------------------------//
export interface EpisodeCreateUseFormProps {
  genreIdList?: number[];
  title?: string;
  description?: string;
  coverImages?: FileList;
}
export type EpisodeCreateReq = Omit<
  EpisodeCreateUseFormProps,
  "genreIdList" | "coverImages"
> & {
  genreIdList?: string;
  coverImage?: File;
};
export interface EpisodeUpdateUseFormProps {
  genreIdList?: number[];
  title?: string;
  description?: string;
  coverImages?: FileList;
}
export type EpisodeUpdateReq = Omit<
  EpisodeUpdateUseFormProps,
  "genreIdList" | "coverImages"
> & {
  genreIdList?: string;
  coverImage?: File;
  bookId?: number;
};
export interface EpisodeCreateResponse {
  success: boolean;
}
export interface EpisodeUpdateRes {
  success: boolean;
}
export interface EpisodeDeleteRes {
  success: boolean;
}

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
