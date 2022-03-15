import { 
    GET_COMMENTS,
    GET_COMMENTS_SUCCESSED,
    GET_COMMENTS_FAILED,
    SET_COMMENTS_LOADING,
    EDIT_COMMENT,
    EDIT_COMMENT_SUCCESSED,
    DELETE_COMMENT,
    DELETE_COMMENT_SUCCESSED,
    CREATE_COMMENT,
    CREATE_COMMENT_SUCCESSED,
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

export const deleteComment = (id) => ({
    type: DELETE_COMMENT,
    payload: id,
});

export const deleteCommentSuccessed = () => ({
    type: DELETE_COMMENT_SUCCESSED,
});

export const createComment = (data) => ({
    type: CREATE_COMMENT,
    payload: data,
});

export const createCommentSuccessed = () => ({
    type: CREATE_COMMENT_SUCCESSED,
});

export const setCommentsLoading = (isLoading) => ({
    type: SET_COMMENTS_LOADING,
    payload: { isLoading },
});
