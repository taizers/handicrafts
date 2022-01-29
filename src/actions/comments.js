import { 
    GET_COMMENTS,
    GET_COMMENTS_SUCCESSED,
    GET_COMMENTS_FAILED,
    SET_COMMENTS_LOADING,
    CLEAR_COMMENTS,
} from "../constants";

export const getComments = (data) => ({
    type: GET_COMMENTS,
    payload: data,
});

export const getCommentsSuccessed = (data) => ({
    type: GET_COMMENTS_SUCCESSED,
    payload: data,
});

export const getCommentsFailed = (error) => ({
    type: GET_COMMENTS_FAILED,
    payload: error,
});

export const clearComments = () => ({
    type: CLEAR_COMMENTS,
});

export const setCommentsLoading = (isLoading) => ({
    type: SET_COMMENTS_LOADING,
    payload: { isLoading },
});
