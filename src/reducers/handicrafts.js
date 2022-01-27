import {  
    GET_HANDICRAFTS_LIST_FAILED,
    GET_HANDICRAFTS_LIST_SUCCESSED,
    GET_HANDICRAFT_FAILED,
    GET_HANDICRAFT_SUCCESSED,
} from "../constants";

const initialState = {
    handicraft: {},
    handicraftsList: [],
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
                handicraftsList: action.payload,
            };
        case GET_HANDICRAFT_FAILED:
            return {
                ...state,
                error: true,
            };
        case GET_HANDICRAFT_SUCCESSED:
            return {
                ...state,
                handicraft: action.payload,
            };
        default:
            return state;
    }
};

export { reducer };