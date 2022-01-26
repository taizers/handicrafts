import { GET_HANDICRAFTS_LIST_SUCCESSED, GET_HANDICRAFTS_LIST_FAILED, GET_HANDICRAFTS_LIST } from "../constants";

export const getHandicraftsList = (data) => ({
    type: GET_HANDICRAFTS_LIST,
    payload: data,
});

export const getHandicraftsListSuccessed = (data) => ({
    type: GET_HANDICRAFTS_LIST_SUCCESSED,
    payload: data,
});

export const getHandicraftsListFailed = (data) => ({
    type: GET_HANDICRAFTS_LIST_FAILED,
    payload: data,
});