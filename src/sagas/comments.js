import { call, put, takeEvery, all, fork, select } from "redux-saga/effects";
import { getCommentsApi, deleteCommentApi, editCommentApi, createCommentApi } from '../api/comments';
import {
    getCommentsSuccessed,
    getCommentsFailed,
    deleteCommentSuccessed,
    createCommentSuccessed,
    setCommentsLoading,
    getComments as getCommentsRequest,
} from '../actions/comments';
import { getPost } from "../actions/posts";
import { GET_COMMENTS, DELETE_COMMENT, EDIT_COMMENT, CREATE_COMMENT } from '../constants';
import {selectToken} from "../selectors/auth";

function* watchGetComments() {
    yield takeEvery(GET_COMMENTS, getComments);
}

function* getComments() {
    const token = yield select(selectToken);
    yield put(setCommentsLoading(true));
    try {
        const comments = yield call(getCommentsApi, token);
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
    const token = yield select(selectToken);
    yield console.log(payload);
    yield put(setCommentsLoading(true));
    try {
        yield call(deleteCommentApi, {payload, token});
        yield put(getCommentsRequest());
        yield put(getPost(payload.postId));
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
    const token = yield select(selectToken);
    yield put(setCommentsLoading(true));
    try {
        yield call(editCommentApi, {payload, token});
        yield put(getCommentsRequest());
        yield put(getPost(payload.postId));
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
    const token = yield select(selectToken);
    yield put(setCommentsLoading(true));
    try {
        yield call(createCommentApi, {payload, token});
        yield put(getPost(payload.postId));
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
