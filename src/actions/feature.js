import {
    GET_FEATURE_ACTIONS,
    GET_FEATURE_ACTIONS_SUCCESSED,
    GET_FEATURE_ACTIONS_FAILED,
    SET_FEATURE_ACTIONS_LOADING,
} from '../constants';

export const getFeatureActions = () => ({
    type: GET_FEATURE_ACTIONS,
});

export const getFeatureActionsSuccessed = (data) => ({
    type: GET_FEATURE_ACTIONS_SUCCESSED,
    payload: data,
});

export const getFeatureActionsFailed = (error) => ({
    type: GET_FEATURE_ACTIONS_FAILED,
    payload: error,
});

export const setFeatureActionsLoading = (isLoading) => ({
    type: SET_FEATURE_ACTIONS_LOADING,
    payload: isLoading,
});