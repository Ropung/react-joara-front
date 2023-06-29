import { EpisodeStatusType } from "../../type";

// -----------------------------[ Command] -----------------------------------//
export interface EpisodeCreateUseFormProps {
  genreIdList?: number[];
  title?: string;
  description?: string;
  coverImages?: FileList;
}
export type EpisodeCreateReq = {
  epiTitle?: string;
  content?: string;
  quote?: string;
};

export interface EpisodeUpdateReq {
  epiTitle?: string;
  content?: string;
  quote?: string;
}

export interface EpisodeCreateRes {
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
  quote?: string;
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
