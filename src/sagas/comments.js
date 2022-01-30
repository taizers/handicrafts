import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { getCommentsApi, deleteCommentApi, editCommentApi, createCommentApi } from '../api/comments';
import {
    getCommentsSuccessed,
    getCommentsFailed,
    deleteCommentSuccessed,
    deleteCommentFailed,
    editCommentSuccessed,
    editCommentFailed,
    createCommentSuccessed,
    createCommentFailed,
} from '../actions/comments';
import { GET_COMMENTS, DELETE_COMMENT, EDIT_COMMENT } from '../constants';

function* watchGetComments() {
    yield takeEvery(GET_COMMENTS, getComments);
}

function* getComments({ payload }) {
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
        const comments = yield call(deleteCommentApi, payload);

        yield put(deleteCommentSuccessed(comments));
    } catch (error) {
        yield put(deleteCommentFailed(error.message));
    }
}

function* watchEditComment() {
    yield takeEvery(EDIT_COMMENT, editComment);
}

function* editComment({ payload }) {
    try {
        const comments = yield call(editCommentApi, payload);

        yield put(editCommentSuccessed(comments));
    } catch (error) {
        yield put(editCommentFailed(error.message));
    }
}

function* watchCreateComment() {
    yield takeEvery(EDIT_COMMENT, createComment);
}

function* createComment(payload) {
    try {
        const comments = yield call(createCommentApi, payload);

        yield put(createCommentSuccessed(comments));
    } catch (error) {
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
