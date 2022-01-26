import {  GET_HANDICRAFTS_LIST_FAILED, GET_HANDICRAFTS_LIST_SUCCESSED } from "../constants";

const initialState = {
    data: [],
    list: [],
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HANDICRAFTS_LIST_FAILED:
            return {
                ...state,
                error: true,
            };
        case GET_HANDICRAFTS_LIST_SUCCESSED:
            return {
                ...state,
                list: action.payload,
            };
        default:
            return state;
    }
};

export { reducer };