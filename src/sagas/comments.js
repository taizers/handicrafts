import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { getCommentsApi, deleteCommentApi, editCommentApi, createCommentApi } from '../api/comments';
import {
    getCommentsSuccessed,
    getCommentsFailed,
    deleteCommentFailed,
    editCommentSuccessed,
    deleteCommentSuccessed,
    createCommentSuccessed,
    editCommentFailed,
    getComments as getCommentsRequest,
    createCommentFailed,
} from '../actions/comments';
import { GET_COMMENTS, DELETE_COMMENT, EDIT_COMMENT, CREATE_COMMENT } from '../constants';

function* watchGetComments() {
    yield takeEvery(GET_COMMENTS, getComments);
}

function* getComments({ payload }) {
    console.log(payload);
    try {
        const comments = yield call(getCommentsApi, payload);

        yield put(getCommentsSuccessed(comments));
    } catch (error) {
        yield put(getCommentsFailed(error.message));
    }
}

function* watchDeleteComment() {
    yield takeEvery(DELETE_COMMENT, deleteComment);
}

function* deleteComment({ payload }) {
    try {
        yield call(deleteCommentApi, payload);
        yield put(deleteCommentSuccessed(payload));
    } catch (error) {
        yield put(deleteCommentFailed(error.message));
    }
}

function* watchEditComment() {
    yield takeEvery(EDIT_COMMENT, editComment);
}

function* editComment({ payload }) {
    try {
        yield call(editCommentApi, payload);

    } catch (error) {
        yield put(editCommentFailed(error.message));
    }
}

function* watchCreateComment() {
    yield takeEvery(CREATE_COMMENT, createComment);
}

function* createComment({ payload }) {
    yield console.log(payload);
    try {
        yield call(createCommentApi, payload);
        yield put(getCommentsRequest(payload.postId));
        yield put(createCommentSuccessed(payload));
    } catch (error) {
        yield console.log(error);
        yield put(createCommentFailed(error.message));
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
