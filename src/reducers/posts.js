import {
    GET_POST_SUCCESSED,
    GET_POSTS_FROM_TYPE_SUCCESSED,
    GET_POSTS_SUCCESSED,
    GET_POSTS_FAILED,
    SET_POSTS_LOADING,
} from "../constants";

const initialState = {
    allPosts: null,
    post: null,
    postsFromCurrentType: null,
    isLoading: false,
    error: null,
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
                allPosts: action.payload,
            };
        case GET_POSTS_FROM_TYPE_SUCCESSED:
            return {
                ...state,
                postsFromCurrentType: action.payload,
            };
        default:
            return state;
    }
};

export { reducer };