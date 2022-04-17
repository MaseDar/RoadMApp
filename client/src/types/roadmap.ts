import { ActionState } from "./extenders/ActionState";
export interface RoadmapState {
  user_id: number;
  roadmap_id: number;
  name: string;
  short_description: string;
  full_description: string;
  background_url: string;
  avatar_img: string;
  percent: number;
  favorite: boolean;
  isActive: boolean;
  isCreator: boolean;
  isEditor: boolean;
}
export interface RoadmapContainer {
  roadmap: RoadmapState;
}

export interface TypesRoadmaps {
  active_roadmaps: RoadmapContainer[];
  sucessed_roadmaps?: RoadmapContainer[];
  created_roadmaps?: RoadmapContainer[];
  favorited_roadmaps?: RoadmapContainer[];
}

export interface RoadmapsContainer {
  roadmaps: TypesRoadmaps;
  loading: boolean;
  error?: string;
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

interface LoadingRoadmapAction {
  type: RoadmapActionTypes.LOADING_ROADMAP;
}

interface GetRoadmapAction {
  type: RoadmapActionTypes.GET_ROADMAP;
  roadmap: RoadmapContainer;
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
