import { 
    GET_COMMENTS_SUCCESSED,
    GET_COMMENTS_FAILED,
    SET_COMMENTS_LOADING,
    CLEAR_COMMENTS,
} from "../constants";

const initialState = {
    comments: [],
    loading: false,
    error: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS_SUCCESSED:
            return {
                ...state,
                comments: action.payload,
            };
        case GET_COMMENTS_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case SET_COMMENTS_LOADING:
            return {
                ...state,
                loading: action.payload.isLoading,
            };
        case CLEAR_COMMENTS:
            return {
                ...initialState,
            };
        default:
            return state;
    }
};

export { reducer };