import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import {signIn, signUp, getUserApi, logOutApi, getUsersApi, createUserApi, deleteUserApi} from '../api/auth';
import {
    authSuccessed,
    authFailed,
    setAuthLoading,
    getUsersSuccessed,
    createUserSuccessed,
    deleteUserSuccessed,
    setCreateModalVisible,
    setCreateModalLoading,
    getUserSuccessed,
} from '../actions/auth';
import {
    SIGN_IN,
    SIGN_UP,
    GET_USER,
    LOG_OUT,
    GET_USERS,
    CREATE_USER,
    DELETE_USER,
} from "../constants";

function* watchSignIn() {
    yield takeEvery(SIGN_IN, signInUser);
}

function* signInUser({ payload }) {
    yield put(setAuthLoading(true));
    try {
        const userData = yield call(signIn, payload);
        yield put(authSuccessed(userData.user));
        document.cookie = `token=${userData.AccessToken}`;
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

function* watchGetUsers() {
    yield takeEvery(GET_USERS, getUsers);
}

function* getUsers({ payload }) {
    yield put(setAuthLoading(true));
    try {
        const userData = yield call(getUsersApi, payload);
        yield put(getUsersSuccessed(userData));
    } catch (error) {
        yield put(authFailed(error.message));
    } finally {
        yield put(setAuthLoading(false));
    }
}

function* watchCreateUser() {
    yield takeEvery(CREATE_USER, createUser);
}

function* createUser({ payload }) {
    yield put(setCreateModalLoading(true));
    try {
        const userData = yield call(createUserApi, payload);
        yield put(createUserSuccessed(userData));
        yield put(setCreateModalVisible(false));
    } catch (error) {
        yield put(authFailed(error.message));
    } finally {
        yield put(setCreateModalLoading(false));
    }
}

function* watchDeleteUser() {
    yield takeEvery(DELETE_USER, deleteUser);
}

function* deleteUser({ payload }) {
    yield put(setAuthLoading(true));
    try {
        const userData = yield call(deleteUserApi, payload);
        yield put(deleteUserSuccessed(userData));
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

function* watchGetUser() {
    yield takeEvery(GET_USER, getUser);
}

function* getUser({ payload }) {
    yield put(setAuthLoading(true));
    try {
        const userData = yield call(getUserApi, payload);
        yield put(getUserSuccessed(userData));
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
      fork(watchLogOut),
      fork(watchGetUsers),
      fork(watchCreateUser),
      fork(watchDeleteUser),
      fork(watchGetUser),
    ]);
}
