import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import {
    getLatestsPostsApi,
    getPostApi,
    getPostsApi,
    deletePostApi,
    updatePostApi,
    createPostApi,
    getPostTypesApi,
} from '../api/posts';

import {
    getPostsSuccessed,
    getPostSuccessed,
    setPostsLoading,
    getPostFailed,
    getLatestsPostsFailed,
    getLatestsPostsSuccessed,
    setLatestsPostsLoading,
    getPostsTypesSuccessed,
} from '../actions/posts';

import {
    GET_POSTS,
    GET_POST,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    GET_LATESTS_POSTS,
    GET_POSTS_TYPES,
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

function* watchGetLatestsPosts() {
    yield takeEvery(GET_LATESTS_POSTS, getLatestsPosts);
}

function* getLatestsPosts() {
    yield setLatestsPostsLoading(true);
    try {
        const data = yield call(getLatestsPostsApi);
        yield put(getLatestsPostsSuccessed(data));
    } catch (error) {
        yield getLatestsPostsFailed(error.message);
    } finally {
        yield setLatestsPostsLoading(false);
    }
}

function* watchGetPostsTypes() {
    yield takeEvery(GET_POSTS_TYPES, getPostsTypes);
}

function* getPostsTypes() {
    yield setPostsLoading(true);
    try {
        const data = yield call(getPostTypesApi);
        yield put(getPostsTypesSuccessed(data));
    } catch (error) {
        yield getPostFailed(error.message);
    } finally {
        yield setPostsLoading(false);
    }
}

export default function* rootSaga() {
    yield all([
        fork(watchGetPosts),
        fork(watchGetPost),
        fork(watchDeletePost),
        fork(watchUpdatePost),
        fork(watchCreatePost),
        fork(watchGetLatestsPosts),
        fork(watchGetPostsTypes),
    ]);
}
