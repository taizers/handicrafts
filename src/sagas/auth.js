import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { signIn } from '../api/users';
import { signInSuccessed, signInFailed } from '../actions/users';

function* watchSignIn() {
    yield takeEvery('SIGN_IN', findUserDataAsync);
}

function* findUserDataAsync({ payload }) {
    try {
        const userData = yield call(signIn, payload);
        yield put(signInSuccessed(userData));
    } catch (error) {
        yield put(signInFailed(error.message));
    }
}

export default function* rootSaga() {
    yield all([
      fork(watchSignIn),
    ]);
}
