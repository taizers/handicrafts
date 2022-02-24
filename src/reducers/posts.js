import {
    GET_POST_SUCCESSED,
    GET_POSTS_SUCCESSED,
    GET_POSTS_FAILED,
    SET_POSTS_LOADING,
    SET_CREATE_POST_LOADING,
    SET_CREATE_POST_VISIBLE,
} from "../constants";

const initialState = {
    posts: [],
    post: {},
    isLoading: false,
    error: null,
    modal: {
        isVisible: false,
        isLoading: false,
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_POSTS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        case GET_POSTS_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case GET_POST_SUCCESSED:
            return {
                ...state,
                post: action.payload,
            };
        case GET_POSTS_SUCCESSED:
            return {
                ...state,
                posts: action.payload,
            };
        case SET_CREATE_POST_LOADING:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    isLoading: action.payload,
                },
            };
        case SET_CREATE_POST_VISIBLE:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    isVisible: action.payload,
                },
            };
        default:
            return state;
    }
};

export { reducer };