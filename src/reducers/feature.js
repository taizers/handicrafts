import {
    GET_FEATURE_ACTIONS_SUCCESSED,
    GET_FEATURE_ACTIONS_FAILED,
    SET_FEATURE_ACTIONS_LOADING,
} from "../constants";

const initialState = {
    feature: [],
    isLoading: false,
    error: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FEATURE_ACTIONS_SUCCESSED:
            return {
                ...state,
                feature: action.payload,
            };
        case GET_FEATURE_ACTIONS_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case SET_FEATURE_ACTIONS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
};

export { reducer };