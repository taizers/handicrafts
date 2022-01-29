import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { signIn, signUp } from '../api/auth';
import { signInSuccessed, signInFailed, signUpSuccessed, signUpFailed } from '../actions/auth';

function* watchSignIn() {
    yield takeEvery('SIGN_IN', signInUser);
}

function* signInUser({ payload }) {
    try {
        const userData = yield call(signIn, payload);
        yield console.log(userData);
        yield put(signInSuccessed(userData));
    } catch (error) {
        yield put(signInFailed(error.message));
    }
}

function* watchSignUp() {
    yield takeEvery('SIGN_UP', signUpUser);
}

function* signUpUser({ payload }) {
    try {
        const userData = yield call(signUp, payload);
        yield put(signUpSuccessed(userData));
    } catch (error) {
        yield put(signUpFailed(error.message));
    }
}

export default function* rootSaga() {
    yield all([
      fork(watchSignIn),
      fork(watchSignUp),
    ]);
}
