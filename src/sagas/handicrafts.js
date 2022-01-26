import { call, put, takeEvery } from "redux-saga/effects";
import { getHandicraftsList as getHandicraftsListApi } from '../api/handicrafts';
import { getHandicraftsListSuccessed, getHandicraftsListFailed } from '../actions/handicrafts';
import { setMainPageLoading } from '../actions/main';

function* watchGetHandicraftList() {
    yield takeEvery('GET_HANDICRAFTS_LIST', getHandicraftsList);
}

function* getHandicraftsList() {
    yield put(setMainPageLoading(true));
    try {
        const data = yield call(getHandicraftsListApi);
        yield put(getHandicraftsListSuccessed(data));
    } catch (error) {
        yield put(getHandicraftsListFailed(error.message));
    } finally {
        yield put(setMainPageLoading(false));
    }
}

export default watchGetHandicraftList;