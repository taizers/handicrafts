import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import {
    getPostsFromTypeApi,
    getPostApi,
    getPostsApi,
    deletePostApi,
    updatePostApi,
    createPostApi,
} from '../api/posts';

import {
    getPostsSuccessed,
    getPostSuccessed,
    setPostsLoading,
    getPostFailed,
} from '../actions/posts';

import {
    GET_POSTS,
    GET_POST,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
} from '../constants';

function* watchGetPosts() {
    yield takeEvery(GET_POSTS, getPosts);
}

function* getPosts({ payload }) {
    yield setPostsLoading(true);
    try {
        const data = yield call(getPostsApi, payload);
        yield put(getPostsSuccessed(data));
    } catch (error) {
        yield getPostFailed(error.message);
    } finally {
        yield setPostsLoading(false);
    }
}

function* watchGetPost() {
    yield takeEvery(GET_POST, getPost);
}

function* getPost({ payload }) {
    yield setPostsLoading(true);
    try {
        const data = yield call(getPostApi, payload);
        yield put(getPostSuccessed(data));
    } catch (error) {
        yield getPostFailed(error.message);
    } finally {
        yield setPostsLoading(false);
    }
}

function* watchDeletePost() {
    yield takeEvery(DELETE_POST, deletePost);
}

function* deletePost({ payload }) {
    yield setPostsLoading(true);
    try {
        yield call(deletePostApi, payload);
    } catch (error) {
        yield getPostFailed(error.message);
    } finally {
        yield setPostsLoading(false);
    }
}

function* watchUpdatePost() {
    yield takeEvery(UPDATE_POST, updatePost);
}

function* updatePost({ payload }) {
    yield setPostsLoading(true);
    try {
        yield call(updatePostApi, payload);
    } catch (error) {
        yield getPostFailed(error.message);
    } finally {
        yield setPostsLoading(false);
    }
}

function* watchCreatePost() {
    yield takeEvery(CREATE_POST, createPost);
}

function* createPost({ payload }) {
    yield setPostsLoading(true);
    try {
        yield call(createPostApi, payload);
    } catch (error) {
        yield getPostFailed(error.message);
    } finally {
        yield setPostsLoading(false);
    }
}

//export default watchGetHandicraftList;

export default function* rootSaga() {
    yield all([
        fork(watchGetPosts),
        fork(watchGetPost),
        fork(watchDeletePost),
        fork(watchUpdatePost),
        fork(watchCreatePost),
    ]);
}