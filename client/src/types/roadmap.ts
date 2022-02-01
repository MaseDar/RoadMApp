export interface RoadMapState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum RoadMapActionTypes {
    FETCH_ROADMAPS= 'FETCH_ROADMAPS',
    FETCH_ROADMAPS_SUCCESS= 'FETCH_ROADMAPS_SUCCESS',
    FETCH_ROADMAPS_ERROR= 'FETCH_ROADMAPS_ERROR',
    SET_ROADMAP_PAGE = 'SET_ROADMAP_PAGE'
}
interface FetchRoadMapAction {
    type: RoadMapActionTypes.FETCH_ROADMAPS
}
interface FetchRoadMapSuccessAction {
    type: RoadMapActionTypes.FETCH_ROADMAPS_SUCCESS;
    payload: any[];
}
interface FetchRoadMapErrorAction {
    type: RoadMapActionTypes.FETCH_ROADMAPS_ERROR;
    payload: string;
}
interface SetRoadMapPage {
    type: RoadMapActionTypes.SET_ROADMAP_PAGE;
    payload: number;
}

export type RoadMapAction =
    FetchRoadMapAction
    | FetchRoadMapErrorAction
    | FetchRoadMapSuccessAction
    | SetRoadMapPage