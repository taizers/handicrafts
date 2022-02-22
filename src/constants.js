export const API_URL = 'http://localhost:5000/';

export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_FROM_TYPE = 'GET_POSTS_FROM_TYPE';
export const GET_POST = 'GET_POST';
export const GET_POSTS_SUCCESSED = 'GET_POSTS_SUCCESSED';
export const GET_POST_SUCCESSED = 'GET_POST_SUCCESSED';
export const GET_POSTS_FROM_TYPE_SUCCESSED = 'GET_POSTS_FROM_TYPE_SUCCESSED';
export const GET_POSTS_FAILED = 'GET_POST_FAILED';
export const SET_POSTS_LOADING = 'SET_POSTS_LOADING';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

export const SIGN_UP = 'SIGN_UP';
export const SET_AUTH_LOADING = 'SET_AUTH_LOADING';
export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESSED = 'GET_USER_SUCCESSED';
export const GET_USERS = 'GET_USERS';
export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESSED = 'CREATE_USER_SUCCESSED';
export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCESSED = 'DELETE_USER_SUCCESSED';
export const GET_USERS_SUCCESSED = 'GET_USERS_SUCCESSED';
export const AUTH_SUCCESSED = 'AUTH_SUCCESSED';
export const SIGN_IN = 'SIGN_IN';
export const SET_CREATE_MODAL_VISIBLE = 'SHOW_CREATE_MODAL';
export const SET_CREATE_MODAL_LOADING = 'SET_CREATE_MODAL_LOADING';
export const AUTH_FAILED = 'SIGN_IN_FAILED';
export const SET_SIGN_IN_LOADING = 'SET_SIGN_IN_LOADING';

export const LOG_OUT = 'LOG_OUT';

export const GET_HANDICRAFTS_LIST = 'GET_HANDICRAFTS_LIST';
export const GET_HANDICRAFTS_LIST_SUCCESSED = 'GET_HANDICRAFTS_LIST_SUCCESSED';
export const GET_HANDICRAFTS_LIST_FAILED = 'GET_HANDICRAFTS_LIST_FAILED';

export const GET_HANDICRAFT = 'GET_HANDICRAFT';
export const GET_HANDICRAFT_FAILED = 'GET_HANDICRAFT_FAILED';
export const GET_HANDICRAFT_SUCCESSED = 'GET_HANDICRAFT_SUCCESSED';

export const EDIT_COMMENT = 'EDIT_COMMENT';
export const EDIT_COMMENT_FAILED = 'EDIT_COMMENT_FAILED';
export const EDIT_COMMENT_SUCCESSED = 'EDIT_COMMENT_SUCCESSED';

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_COMMENT_FAILED = 'DELETE_COMMENT_FAILED';
export const DELETE_COMMENT_SUCCESSED = 'DELETE_COMMENT_SUCCESSED';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const CREATE_COMMENT_FAILED = 'CREATE_COMMENT_FAILED';
export const CREATE_COMMENT_SUCCESSED = 'CREATE_COMMENT_SUCCESSED';


export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_COMMENTS_SUCCESSED = 'GET_COMMENTS_SUCCESSED';
export const GET_COMMENTS_FAILED = 'GET_COMMENTS_FAILED';
export const SET_COMMENTS_LOADING = 'SET_COMMENTS_LOADING';
export const CLEAR_COMMENTS = 'CLEAR_COMMENTS';

export const SET_MAIN_PAGE_LOADING = 'SET_MAIN_PAGE_LOADING';

export const pathToMainPage = '/hc';
export const pathToHome = '/home';
export const pathToSignIn = '/login';
export const pathToSignUp = '/signUp';
export const pathToProfile = '/profile';
export const pathToModeration = '/moderation';
export const pathToHandicrafts = '/handicrafts';
export const pathToHandicraftItem = '/handicrafts/:id';
export const pathToPosts= '/posts/:type';
export const pathToPost= '/post/:id';
export const pathToMap = '/map';

export const POSTS_TYPES = [
    {
        name: 'Ремёсла',
        type: 'handicrafts',
    },
    {
        name: 'Изделия',
        type: 'goods',
    },
];
