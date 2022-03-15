import { call, put, takeEvery, all, fork, select } from "redux-saga/effects";
import {
    getLatestsPostsApi,
    getPostApi,
    getPostsApi,
    deletePostApi,
    updatePostApi,
    createPostApi,
    createPostsTypeApi,
    getPostsTypesApi,
    deletePostTypeApi,
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
    setCreatePostLoading, deletePostTypeSuccessed,
} from '../actions/posts';

import {
    GET_POSTS,
    GET_POST,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    GET_LATESTS_POSTS,
    GET_POSTS_TYPES,
    CREATE_POSTS_TYPE,
    GET_FEATURE_ACTIONS, GET_WIDGETS_POSTS, DELETE_POST_TYPE,
} from '../constants';

import {selectToken} from "../selectors/auth";
import {getFeatureActionsFailed, getFeatureActionsSuccessed, setFeatureActionsLoading} from "../actions/feature";

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
    const token = yield select(selectToken);
    yield setPostsLoading(true);
    try {
        yield call(deletePostApi, {payload, token});
    } catch (error) {
        yield getPostFailed(error.message);
    } finally {
        yield setPostsLoading(false);
    }
}

// function* watchUpdatePost() {
//     yield takeEvery(UPDATE_POST, updatePost);
// }
//
// function* updatePost({ payload }) {
//     yield setPostsLoading(true);
//     try {
//         yield call(updatePostApi, payload);
//     } catch (error) {
//         yield getPostFailed(error.message);
//     } finally {
//         yield setPostsLoading(false);
//     }
// }

function* watchCreatePost() {
    yield takeEvery(CREATE_POST, createPost);
}

function* createPost({ payload }) {
    yield setCreatePostLoading(true);
    const token = yield select(selectToken);
    try {
        yield call(createPostApi, {payload, token});
    } catch (error) {
        yield getPostFailed(error.message);
    } finally {
        yield setCreatePostLoading(false);
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
        const data = yield call(getPostsTypesApi);
        yield put(getPostsTypesSuccessed(data));
    } catch (error) {
        yield getPostFailed(error.message);
    } finally {
        yield setPostsLoading(false);
    }
}

function* watchCreatePostsType() {
    yield takeEvery(CREATE_POSTS_TYPE, createPostsType);
}

function* createPostsType({ payload }) {
    const token = yield select(selectToken);
    yield setCreatePostLoading(true);
    try {
        const data = yield call(createPostsTypeApi, { payload, token });
        yield put(getPostsTypesSuccessed(data));
    } catch (error) {
        yield getPostFailed(error.message);
    } finally {
        yield setCreatePostLoading(false);
    }
}

function* watchGetFeatureActions() {
    yield takeEvery(GET_FEATURE_ACTIONS, getFeatureActions);
}

function* getFeatureActions({ payload }) {
    yield put(setFeatureActionsLoading(true));
    try {
        const data = yield call(getPostsApi, payload);
        yield put(getFeatureActionsSuccessed(data.splice(0, 3)));
    } catch (error) {
        yield put(getFeatureActionsFailed(error.message));
    } finally {
        yield put(setFeatureActionsLoading(false));
    }
}

function* watchGetWidgetsPosts() {
    yield takeEvery(GET_WIDGETS_POSTS, getWidgetsPosts);
}

function* getWidgetsPosts() {
    yield put(setFeatureActionsLoading(true));
    try {
        const data = yield call(getPostsApi);
        const copy = data.splice(0, 3);
        yield put(getFeatureActionsSuccessed(copy));
        yield put(getLatestsPostsSuccessed(copy));
    } catch (error) {
        yield put(getFeatureActionsFailed(error.message));
    } finally {
        yield put(setFeatureActionsLoading(false));
    }
}

function* watchDeletePostType() {
    yield takeEvery(DELETE_POST_TYPE, deletePostType);
}

function* deletePostType({ payload }) {
    const token = yield select(selectToken);
    yield put(setPostsLoading(true));
    try {
        const data = yield call(deletePostTypeApi, {payload, token});
        yield put(deletePostTypeSuccessed(data));
    } catch (error) {
        yield put(getPostFailed(error.message));
    } finally {
        yield put(setPostsLoading(false));
    }
}

export default function* rootSaga() {
    yield all([
        fork(watchGetPosts),
        fork(watchGetPost),
        fork(watchDeletePost),
        // fork(watchUpdatePost),
        fork(watchCreatePost),
        fork(watchGetLatestsPosts),
        fork(watchGetPostsTypes),
        fork(watchCreatePostsType),
        fork(watchGetFeatureActions),
        fork(watchGetWidgetsPosts),
        fork(watchDeletePostType),
    ]);
}
