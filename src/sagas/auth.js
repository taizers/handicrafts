import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import {signIn, signUp, getUserApi, logOutApi} from '../api/auth';
import {
    authSuccessed,
    authFailed,
    setAuthLoading,
} from '../actions/auth';
import {
    SIGN_IN,
    SIGN_UP,
    GET_USER,
    LOG_OUT,
} from "../constants";

function* watchSignIn() {
    yield takeEvery(SIGN_IN, signInUser);
}

function* signInUser({ payload }) {
    yield put(setAuthLoading(true));
    try {
        const userData = yield call(signIn, payload);
        yield put(authSuccessed(userData));
    } catch (error) {
        yield put(authFailed(error.message));
    } finally {
        yield put(setAuthLoading(false));
    }
}

function* watchSignUp() {
    yield takeEvery(SIGN_UP, signUpUser);
}

function* signUpUser({ payload }) {
    yield put(setAuthLoading(true));
    try {
        const userData = yield call(signUp, payload);
        yield put(authSuccessed(userData));
    } catch (error) {
        yield put(authFailed(error.message));
    } finally {
        yield put(setAuthLoading(false));
    }
}

function* watchGetUser() {
    yield takeEvery(GET_USER, getUser);
}

function* getUser({ payload }) {
    yield put(setAuthLoading(true));
    try {
        const userData = yield call(getUserApi, payload);
        yield put(authSuccessed(userData));
    } catch (error) {
        yield put(authFailed(error.message));
    } finally {
        yield put(setAuthLoading(false));
    }
}

function* watchLogOut() {
    yield takeEvery(LOG_OUT, logOut);
}

function* logOut({ payload }) {
    yield put(setAuthLoading(true));
    try {
        yield call(logOutApi, payload);
    } catch (error) {
        yield put(authFailed(error.message));
    } finally {
        yield put(setAuthLoading(false));
    }
}

export default function* rootSaga() {
    yield all([
      fork(watchSignIn),
      fork(watchSignUp),
      fork(watchGetUser),
      fork(watchLogOut),
    ]);
}
