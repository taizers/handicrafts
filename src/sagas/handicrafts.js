import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { getHandicraftsListApi, getHandicraftApi } from '../api/handicrafts';
import { 
    getHandicraftsListSuccessed,
    getHandicraftsListFailed,
    getHandicraftSuccessed,
    getHandicraftFailed,
} from '../actions/handicrafts';
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

function* watchGetHandicraft() {
    yield takeEvery('GET_HANDICRAFT', getHandicraft);
}

function* getHandicraft({ payload }) {
    yield put(setMainPageLoading(true));
    try {
        const data = yield call(getHandicraftApi, payload);
        yield put(getHandicraftSuccessed(data));
    } catch (error) {
        yield put(getHandicraftFailed(error.message));
    } finally {
        yield put(setMainPageLoading(false));
    }
}

export default function* rootSaga() {
    yield all([
      fork(watchGetHandicraftList),
      fork(watchGetHandicraft),
    ]);
}
  