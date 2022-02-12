import { 
    GET_COMMENTS,
    GET_COMMENTS_SUCCESSED,
    GET_COMMENTS_FAILED,
    SET_COMMENTS_LOADING,
    CLEAR_COMMENTS,
    EDIT_COMMENT,
    EDIT_COMMENT_SUCCESSED,
    EDIT_COMMENT_FAILED,
    DELETE_COMMENT,
    DELETE_COMMENT_SUCCESSED,
    DELETE_COMMENT_FAILED,
    CREATE_COMMENT,
    CREATE_COMMENT_SUCCESSED,
    CREATE_COMMENT_FAILED,
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

export const editComment = (comment) => ({
    type: EDIT_COMMENT,
    payload: comment,
});

export const editCommentSuccessed = () => ({
    type: EDIT_COMMENT_SUCCESSED,
});

export const editCommentFailed = (error) => ({
    type: EDIT_COMMENT_FAILED,
    payload: error,
});

export const deleteComment = (id) => ({
    type: DELETE_COMMENT,
    payload: id,
});

export const deleteCommentSuccessed = () => ({
    type: DELETE_COMMENT_SUCCESSED,
});

export const deleteCommentFailed = (error) => ({
    type: DELETE_COMMENT_FAILED,
    payload: error,
});

export const createComment = (comment) => ({
    type: CREATE_COMMENT,
    payload: comment,
});

export const createCommentSuccessed = () => ({
    type: CREATE_COMMENT_SUCCESSED,
});

export const createCommentFailed = (error) => ({
    type: CREATE_COMMENT_FAILED,
    payload: error,
});

export const clearComments = () => ({
    type: CLEAR_COMMENTS,
});

export const setCommentsLoading = (isLoading) => ({
    type: SET_COMMENTS_LOADING,
    payload: { isLoading },
});
