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
}
export interface RoadmapContainer {
  roadmap: RoadmapState;
  loading: boolean;
  error?: string;
}

export enum RoadmapActionTypes {
  LOADING_ROADMAP = "LOADING_ROADMAP",
  // GET_USER_ROADMAPS = "GET_USER_ROADMAPS",
  GET_ROADMAP = "GET_ROADMAP",
  CREATE_ROADMAP = "CREATE_ROADMAP",
  EDIT_ROADMAP = "EDIT_ROADMAP",
  DELETE_ROADMAP = "DELETE_ROADMAP",
  ERROR = "ERROR",
}

interface LoadingRoadmapAction {
  type: RoadmapActionTypes.LOADING_ROADMAP;
}

// interface GetUserRoadmapsAction {
//   type: RoadMapActionTypes.GET_USER_ROADMAPS;
//   roadmaps: any[];
//   success: boolean;
// }

interface GetRoadmapAction {
  type: RoadmapActionTypes.GET_ROADMAP;
  roadmap: RoadmapState;
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
  | CreateRoadmapAction
  | EditRoadmapAction
  | DeleteRoadmapAction
  | LoadingRoadmapAction
  | ErrorAction;
