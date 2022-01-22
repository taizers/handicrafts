import { call, put, takeEvery } from "redux-saga/effects";
import { getUser } from '../api/users';
import { getUserSuccessed, getUserFailed } from '../actions/users';

function* watchFindData() {
    yield takeEvery('FIND_USER', findUserDataAsync);
}

function* findUserDataAsync({ payload }) {
    try {
        const userData = yield call(getUser, payload);
        yield put(getUserSuccessed(userData));
    } catch (error) {
        yield put(getUserFailed(error.message));
    }
}

export default watchFindData;
