export interface RoadMapState {
    roadmaps: any[];
    loading: boolean;
    error: null | string;
    limit: number;
}

export enum RoadMapActionTypes {
    LOADING_ROADMAPS = 'LOADING_ROADMAPS',
    GET_USER_ROADMAPS = 'GET_USER_ROADMAPS',
    GET_ROADMAP = 'GET_ROADMAP',
    CREATE_ROADMAP = 'CREATE_ROADMAP',
    EDIT_ROADMAP = 'EDIT_ROADMAP',
    DELETE_ROADMAP = 'DELETE_ROADMAP',
    ERROR = 'ERROR',
}

interface LoadingRoadmapAction {
    type: RoadMapActionTypes.LOADING_ROADMAPS
}

interface GetUserRoadmapsAction {
    type: RoadMapActionTypes.GET_USER_ROADMAPS,
    roadmaps: any[],
    success: boolean,
}

interface GetRoadmapAction {
    type: RoadMapActionTypes.GET_ROADMAP,
    user_id: number,
    roadmap_id: number,
    success: boolean,
}
interface CreateRoadmapAction {
    type: RoadMapActionTypes.CREATE_ROADMAP,
    user_id: number,
    roadmap_name: string,
    roadmap_description: string,
    success: boolean,
}
interface EditRoadmapAction {
    type: RoadMapActionTypes.EDIT_ROADMAP,
    user_id: number,
    roadmap_id: number,
    roadmap_name: string,
    roadmap_description: string,
    success: boolean,
}
interface DeleteRoadmapAction {
    type: RoadMapActionTypes.DELETE_ROADMAP,
    user_id: number,
    roadmap_id: number,
    success: boolean,
}  
interface ErrorAction {
    type: RoadMapActionTypes.ERROR,
    error: string
}  




export type RoadMapAction = GetRoadmapAction | CreateRoadmapAction | EditRoadmapAction | DeleteRoadmapAction | LoadingRoadmapAction | GetUserRoadmapsAction | ErrorAction
