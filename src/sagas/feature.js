import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { getPostsApi } from '../api/posts';
import {
    getFeatureActionsSuccessed,
    getFeatureActionsFailed,
    setFeatureActionsLoading,
} from '../actions/feature';
import {
    GET_FEATURE_ACTIONS,
} from "../constants";

function* watchGetFeatureActions() {
    yield takeEvery(GET_FEATURE_ACTIONS, getFeatureActions);
}

function* getFeatureActions() {
    yield put(setFeatureActionsLoading(true));
    try {
        const data = yield call(getPostsApi);
        yield put(getFeatureActionsSuccessed(data));
    } catch (error) {
        yield put(getFeatureActionsFailed(error.message));
    } finally {
        yield put(setFeatureActionsLoading(false));
    }
}


export default function* rootSaga() {
    yield all([
        //fork(watchGetFeatureActions),
    ]);
}