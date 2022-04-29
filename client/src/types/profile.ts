import { RoadmapState } from "./common/roadmap.type";

export interface TypesRoadmaps {
  active_roadmaps?: RoadmapState[];
  sucessed_roadmaps?: RoadmapState[];
  created_roadmaps?: RoadmapState[];
  favorited_roadmaps?: RoadmapState[];
}

export interface ProfileContainer {
  profile_roadmaps?: TypesRoadmaps;
  loading: boolean;
  error?: string;
}

export enum ProfileActionTypes {
  LOADING_PROFILE = "LOADING_PROFILE",
  GET_USER_ROADMAPS = "GET_USER_ROADMAPS",
  ERROR = "ERROR",
}

interface LoadingProfileAction {
  type: ProfileActionTypes.LOADING_PROFILE;
}

interface GetUserRoadmaps {
  type: ProfileActionTypes.GET_USER_ROADMAPS;
  roadmaps: TypesRoadmaps;
}

interface ErrorAction {
  type: ProfileActionTypes.ERROR;
  error: string;
}

export type ProfileAction =
  | GetUserRoadmaps
  | LoadingProfileAction
  | ErrorAction;
