import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { getCommentsApi, deleteCommentApi, editCommentApi, createCommentApi } from '../api/comments';
import {
    getCommentsSuccessed,
    getCommentsFailed,
    deleteCommentSuccessed,
    createCommentSuccessed,
    setCommentsLoading,
    getComments as getCommentsRequest,
} from '../actions/comments';
import { GET_COMMENTS, DELETE_COMMENT, EDIT_COMMENT, CREATE_COMMENT } from '../constants';

function* watchGetComments() {
    yield takeEvery(GET_COMMENTS, getComments);
}

function* getComments({ payload }) {
    yield put(setCommentsLoading(true));
    try {
        const comments = yield call(getCommentsApi, payload);
        yield put(getCommentsSuccessed(comments));
    } catch (error) {
        yield put(getCommentsFailed(error.message));
    } finally {
        yield put(setCommentsLoading(false));
    }
}

function* watchDeleteComment() {
    yield takeEvery(DELETE_COMMENT, deleteComment);
}

function* deleteComment({ payload }) {
    yield put(setCommentsLoading(true));
    try {
        yield call(deleteCommentApi, payload);
        yield put(deleteCommentSuccessed(payload));
    } catch (error) {
        yield put(getCommentsFailed(error.message));
    } finally {
        yield put(setCommentsLoading(false));
    }
}

function* watchEditComment() {
    yield takeEvery(EDIT_COMMENT, editComment);
}

function* editComment({ payload }) {
    yield put(setCommentsLoading(true));
    try {
        yield call(editCommentApi, payload);

    } catch (error) {
        yield put(getCommentsFailed(error.message));
    } finally {
        yield put(setCommentsLoading(false));
    }
}

function* watchCreateComment() {
    yield takeEvery(CREATE_COMMENT, createComment);
}

function* createComment({ payload }) {
    yield put(setCommentsLoading(true));
    try {
        yield call(createCommentApi, payload);
        yield put(getCommentsRequest(payload.postId));
        yield put(createCommentSuccessed(payload));
    } catch (error) {
        yield put(getCommentsFailed(error.message));
    } finally {
        yield put(setCommentsLoading(false));
    }
}


export default function* rootSaga() {
    yield all([
      fork(watchGetComments),
      fork(watchDeleteComment),
      fork(watchEditComment),
      fork(watchCreateComment),
    ]);
}
