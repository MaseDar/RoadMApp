import { ActionState } from "./extenders/ActionState";
interface RoadmapHat {
  name: string;
  short_description?: string;
  full_description?: string;
  background_url?: string;
  avatar_img?: string;
  percent: number;
}

export interface RoadmapState extends RoadmapHat {
  user_id: number;
  roadmap_id: number;
  favorite: boolean;
  isActive: boolean;
  isCreator: boolean;
  isEditor: boolean;
}

export interface TypesRoadmaps {
  active_roadmaps?: RoadmapState[];
  sucessed_roadmaps?: RoadmapState[];
  created_roadmaps?: RoadmapState[];
  favorited_roadmaps?: RoadmapState[];
}

export interface RoadmapsContainer {
  single_roadmap?: RoadmapState;
  profile_roadmaps?: TypesRoadmaps;
  loading: boolean;
  error?: string;
}

export interface RoadmapTrancferProps {
  roadmap: RoadmapState;
}

export enum RoadmapActionTypes {
  LOADING_ROADMAP = "LOADING_ROADMAP",
  GET_USER_ROADMAPS = "GET_USER_ROADMAPS",
  GET_ROADMAP = "GET_ROADMAP",
  CREATE_ROADMAP = "CREATE_ROADMAP",
  EDIT_ROADMAP = "EDIT_ROADMAP",
  DELETE_ROADMAP = "DELETE_ROADMAP",
  ERROR = "ERROR",
}

// export interface RoadmapsContainer {
//   roadmaps: RoadmapState[];
//   loading: boolean;
//   error?: string;
// }

interface LoadingRoadmapAction {
  type: RoadmapActionTypes.LOADING_ROADMAP;
}

interface GetRoadmapAction {
  type: RoadmapActionTypes.GET_ROADMAP;
  roadmap: RoadmapState;
  error?: string;
}
interface GetUserRoadmaps {
  type: RoadmapActionTypes.GET_USER_ROADMAPS;
  roadmaps: TypesRoadmaps;
}
interface CreateRoadmapAction {
  type: RoadmapActionTypes.CREATE_ROADMAP;
}
interface EditRoadmapAction {
  type: RoadmapActionTypes.EDIT_ROADMAP;
}
interface DeleteRoadmapAction {
  type: RoadmapActionTypes.DELETE_ROADMAP;
  user_id: number;
  roadmap_id: number;
  success: boolean;
}
interface ErrorAction {
  type: RoadmapActionTypes.ERROR;
  error: string;
}

export type RoadmapAction =
  | GetRoadmapAction
  | GetUserRoadmaps
  | CreateRoadmapAction
  | EditRoadmapAction
  | DeleteRoadmapAction
  | LoadingRoadmapAction
  | ErrorAction;
