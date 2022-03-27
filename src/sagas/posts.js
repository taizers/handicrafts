import { call, put, takeEvery, all, fork, select } from "redux-saga/effects";
import moment from "moment";
import toast from 'react-hot-toast';
import { FormattedMessage } from 'react-intl'

import {
    getLatestsPostsApi,
    getPostApi,
    getPostsApi,
    deletePostApi,
    createPostApi,
    createPostsTypeApi,
    getPostsTypesApi,
    deletePostTypeApi,
} from '../api/posts';

import {
    getPostsSuccessed,
    getPostSuccessed,
    setPostsLoading,
    getLatestsPostsSuccessed,
    setLatestsPostsLoading,
    getPostsTypesSuccessed,
    setCreatePostLoading, 
    getPostsTypes as getCategories,
    setCreatePostVisible,
    getPosts as getPostsQuery,
    clearPostDetails,
} from '../actions/posts';

import {
    GET_POSTS,
    GET_POST,
    CREATE_POST,
    DELETE_POST,
    GET_LATESTS_POSTS,
    GET_POSTS_TYPES,
    CREATE_POSTS_TYPE,
    GET_FEATURE_ACTIONS,
    DELETE_POST_TYPE,
} from '../constants';

import {selectToken} from "../selectors/auth";
import { getFeatureActionsSuccessed, setFeatureActionsLoading } from "../actions/feature";

function* watchGetPosts() {
    yield takeEvery(GET_POSTS, getPosts);
}

function* getPosts({ payload }) {
    yield put(setPostsLoading(true));
    try {
        const data = yield call(getPostsApi, payload);
        yield put(getPostsSuccessed(data));
        const features = yield data.slice().filter(post => post.type?.value === 'feature').sort((a, b) => moment(b.date, 'YYYY.MM.DD') - moment(a.date, 'YYYY.MM.DD')).splice(0,3);
        const latests = yield data.slice().sort((a, b) => moment(b.created_at, 'DD.MM.YY') - moment(a.created_at, 'DD.MM.YY')).reverse().splice(0,3);

        yield put(getFeatureActionsSuccessed(features));
        yield put(getLatestsPostsSuccessed(latests));
    } catch (error) {
        yield toast.error(error.message);
    } finally {
        yield put(setPostsLoading(false));
    }
}

function* watchGetPost() {
    yield takeEvery(GET_POST, getPost);
}

function* getPost({ payload }) {
    yield put(setPostsLoading(true));
    try {
        const data = yield call(getPostApi, payload);
        yield put(getPostSuccessed(data));
    } catch (error) {
        yield toast.error(error.message);
    } finally {
        yield put(setPostsLoading(false));
    }
}

function* watchDeletePost() {
    yield takeEvery(DELETE_POST, deletePost);
}

function* deletePost({ payload }) {
    const token = yield select(selectToken);
    yield put(setPostsLoading(true));
    try {
        yield call(deletePostApi, {payload, token});
        yield put(clearPostDetails());
        yield put(getPostsQuery());
        yield toast.success(<FormattedMessage id='toast_deleted' />);
    } catch (error) {
        yield toast.error(error.message);
    } finally {
        yield put(setPostsLoading(false));
    }
}

function* watchCreatePost() {
    yield takeEvery(CREATE_POST, createPost);
}

function* createPost({ payload }) {
    yield put(setCreatePostLoading(true));
    const token = yield select(selectToken);
    try {
        yield call(createPostApi, {payload, token});
        yield put(setCreatePostVisible(false));
        yield put(getPostsQuery());
        yield toast.success(<FormattedMessage id='toast_created' />);
    } catch (error) {
        yield toast.error(error.message);
    } finally {
        yield put(setCreatePostLoading(false));
    }
}

function* watchGetLatestsPosts() {
    yield takeEvery(GET_LATESTS_POSTS, getLatestsPosts);
}

function* getLatestsPosts() {
    yield put(setLatestsPostsLoading(true));
    try {
        const data = yield call(getLatestsPostsApi);
        yield put(getLatestsPostsSuccessed(data));
    } catch (error) {
        yield toast.error(error.message);
    } finally {
        yield put(setLatestsPostsLoading(false));
    }
}

function* watchGetPostsTypes() {
    yield takeEvery(GET_POSTS_TYPES, getPostsTypes);
}

function* getPostsTypes() {
    yield put(setPostsLoading(true));
    try {
        const data = yield call(getPostsTypesApi);
        yield put(getPostsTypesSuccessed(data));
    } catch (error) {
        yield toast.error(error.message);
    } finally {
        yield put(setPostsLoading(false));
    }
}

function* watchCreatePostsType() {
    yield takeEvery(CREATE_POSTS_TYPE, createPostsType);
}

function* createPostsType({ payload }) {
    const token = yield select(selectToken);
    yield put(setCreatePostLoading(true));
    try {
        yield call(createPostsTypeApi, { payload, token });
        yield put(getCategories());
        yield put(setCreatePostVisible(false));
        yield toast.success(<FormattedMessage id='toast_created' />);
    } catch (error) {
        yield toast.error(error.message);
    } finally {
        yield put(setCreatePostLoading(false));
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
        yield toast.error(error.message);
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
        yield call(deletePostTypeApi, {payload, token});
        yield put(getPostsQuery());
        yield put(getCategories());
        yield toast.success(<FormattedMessage id='toast_deleted' />);

    } catch (error) {
        yield toast.error(error.message);
    } finally {
        yield put(setPostsLoading(false));
    }
}

export default function* rootSaga() {
    yield all([
        fork(watchGetPosts),
        fork(watchGetPost),
        fork(watchDeletePost),
        fork(watchCreatePost),
        fork(watchGetLatestsPosts),
        fork(watchGetPostsTypes),
        fork(watchCreatePostsType),
        fork(watchGetFeatureActions),
        fork(watchDeletePostType),
    ]);
}
