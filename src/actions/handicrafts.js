import { 
    GET_HANDICRAFTS_LIST_SUCCESSED,
    GET_HANDICRAFTS_LIST_FAILED,
    GET_HANDICRAFTS_LIST,
    GET_HANDICRAFT,
    GET_HANDICRAFT_SUCCESSED,
    GET_HANDICRAFT_FAILED,
} from "../constants";

export const getHandicraftsList = () => ({
    type: GET_HANDICRAFTS_LIST,
});

export const getHandicraftsListSuccessed = (data) => ({
    type: GET_HANDICRAFTS_LIST_SUCCESSED,
    payload: data,
});

export const getHandicraftsListFailed = (data) => ({
    type: GET_HANDICRAFTS_LIST_FAILED,
    payload: data,
});

export const getHandicraft = (id) => ({
    type: GET_HANDICRAFT,
    payload: id,
});

export const getHandicraftSuccessed = (data) => ({
    type: GET_HANDICRAFT_SUCCESSED,
    payload: data,
});

export const getHandicraftFailed = (data) => ({
    type: GET_HANDICRAFT_FAILED,
    payload: data,
});