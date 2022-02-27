import { 
    SIGN_IN,
    AUTH_SUCCESSED,
    AUTH_FAILED,
    SET_SIGN_IN_LOADING,
    SIGN_UP,
    LOG_OUT,
    GET_USER,
    GET_USERS,
    GET_USERS_SUCCESSED,
    CREATE_USER,
    CREATE_USER_SUCCESSED,
    DELETE_USER,
    DELETE_USER_SUCCESSED,
    SET_CREATE_MODAL_LOADING,
    SET_CREATE_MODAL_VISIBLE,
    GET_USER_SUCCESSED,
} from "../constants";

export const signIn = (data) => ({
    type: SIGN_IN,
    payload: data,
});

export const signUp = (data) => ({
    type: SIGN_UP,
    payload: data,
});

export const authFailed = (data) => ({
    type: AUTH_FAILED,
    payload: data,
});

export const authSuccessed = (user) => ({
    type: AUTH_SUCCESSED,
    payload: user,
});

export const getUsers = () => ({
    type: GET_USERS,
});

export const getUser = (id) => ({
    type: GET_USER,
    payload: id,
});

export const getUserSuccessed = (user) => ({
    type: GET_USER_SUCCESSED,
    payload: user,
});

export const setCreateModalVisible = (isVisible) => ({
    type: SET_CREATE_MODAL_VISIBLE,
    payload: isVisible,
});

export const setCreateModalLoading = (isLoading) => ({
    type: SET_CREATE_MODAL_VISIBLE,
    payload: isLoading,
});

export const getUsersSuccessed = (users) => ({
    type: GET_USERS_SUCCESSED,
    payload: users,
});

export const createUser = (user) => ({
    type: CREATE_USER,
    payload: user,
});

export const createUserSuccessed = () => ({
    type: CREATE_USER_SUCCESSED,
});

export const deleteUser = (id) => ({
    type: DELETE_USER,
    payload: id,
});

export const deleteUserSuccessed = () => ({
    type: DELETE_USER_SUCCESSED,
});

export const logOut = () => ({
    type: LOG_OUT,
});

export const setAuthLoading = (isLoading) => ({
    type: SET_SIGN_IN_LOADING,
    payload: { isLoading },
});
