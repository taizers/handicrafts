import { call, put, takeEvery, all, fork, select } from "redux-saga/effects";
import {
    signIn,
    signUp,
    getUserApi,
    logOutApi,
    getUsersApi,
    createUserApi,
    deleteUserApi,
    changeUserApi
} from '../api/auth';
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
    getUserProfileSuccessed, 
    setChangeProfileLoading, 
    setAuthModalLoading,
    getUsers as getUsersQuery,
} from '../actions/auth';
import {
    SIGN_IN,
    SIGN_UP,
    GET_USER,
    LOG_OUT,
    GET_USERS,
    CREATE_USER,
    DELETE_USER, GET_USER_PROFILE, CHANGE_PROFILE,
} from "../constants";
import {selectToken} from "../selectors/auth";

function* watchSignIn() {
    yield takeEvery(SIGN_IN, signInUser);
}

function* signInUser({ payload }) {
    yield put(setAuthLoading(true));
    try {
        const userData = yield call(signIn, payload);
        yield document.cookie = `token=${userData.access_token}`;
        yield document.cookie = `userId=${userData.user.id}`;
        yield put(authSuccessed(userData.user, userData.access_token));
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
    yield console.log(payload);
    yield put(setAuthLoading(true));
    try {
        yield call(signUp, payload.data);
        yield payload.history.push('/login');
    } catch (error) {
        yield put(authFailed(error.message));
    } finally {
        yield put(setAuthLoading(false));
    }
}

function* watchGetUsers() {
    yield takeEvery(GET_USERS, getUsers);
}

function* getUsers() {
    const token = yield select(selectToken);
    yield put(setAuthLoading(true));
    try {
        const userData = yield call(getUsersApi, token);
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
    const token = yield select(selectToken);
    yield console.log(payload);
    yield put(setCreateModalLoading(true));
    try {
        yield call(createUserApi, { payload, token});
        yield put(setCreateModalVisible(false));
        yield put(getUsersQuery());
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
    const token = yield select(selectToken);
    yield put(setAuthLoading(true));
    try {
        const userData = yield call(deleteUserApi, { payload, token });
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

function* logOut() {
    const token = yield select(selectToken);
    yield put(setAuthLoading(true));
    try {
        yield call(logOutApi, token);
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
        yield console.log(userData);
        yield put(authSuccessed(userData, payload.token));
    } catch (error) {
        yield put(authFailed(error.message));
    } finally {
        yield put(setAuthLoading(false));
    }
}

function* watchGetUserProfile() {
    yield takeEvery(GET_USER_PROFILE, getUserProfile);
}

function* getUserProfile({ payload }) {
    yield put(setAuthLoading(true));
    try {
        const userData = yield call(getUserApi, payload);
        yield put(getUserProfileSuccessed(userData));
    } catch (error) {
        yield put(authFailed(error.message));
    } finally {
        yield put(setAuthLoading(false));
    }
}

function* watchChangeUserSettings() {
    yield takeEvery(CHANGE_PROFILE, changeUserSettings);
}

function* changeUserSettings({ payload }) {
    const token = yield select(selectToken);
    yield put(setAuthModalLoading(true));
    try {
        const userData = yield call(changeUserApi, {payload, token});
        yield put(getUserProfileSuccessed(userData));
    } catch (error) {
        yield put(authFailed(error.message));
    } finally {
        yield put(setAuthModalLoading(false));
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
      fork(watchGetUserProfile),
      fork(watchChangeUserSettings),
    ]);
}
