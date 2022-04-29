import { RoadmapState } from "./common/roadmap.type";

export enum RoadmapActionTypes {
  LOADING_ROADMAP = "LOADING_ROADMAP",
  GET_ROADMAP = "GET_ROADMAP",
  CREATE_ROADMAP = "CREATE_ROADMAP",
  UPDATE_ROADMAP = "UPDATE_ROADMAP",
  DELETE_ROADMAP = "DELETE_ROADMAP",
  ERROR = "ERROR",
}

export interface RoadmapConainer {
  roadmap?: RoadmapState;
  loading: boolean;
  error?: string;
}

interface LoadingRoadmapAction {
  type: RoadmapActionTypes.LOADING_ROADMAP;
}

interface GetRoadmapAction {
  type: RoadmapActionTypes.GET_ROADMAP;
  roadmap: RoadmapState;
}
interface CreateRoadmapAction {
  type: RoadmapActionTypes.CREATE_ROADMAP;
}
interface UpdateRoadmapAction {
  type: RoadmapActionTypes.UPDATE_ROADMAP;
}
interface DeleteRoadmapAction {
  type: RoadmapActionTypes.DELETE_ROADMAP;
  user_id: number;
  roadmap_id: number;
  success: boolean;
}
interface ErrorRoadmapAction {
  type: RoadmapActionTypes.ERROR;
  error: string;
}

export type RoadmapAction =
  | LoadingRoadmapAction
  | GetRoadmapAction
  | CreateRoadmapAction
  | UpdateRoadmapAction
  | DeleteRoadmapAction
  | ErrorRoadmapAction;
