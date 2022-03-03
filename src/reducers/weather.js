import {
    GET_WEATHER_SUCCESSED,
    GET_WEATHER_FAILED,
    SET_WEATHER_LOADING,
    GET_USER_LOCATION,
} from "../constants";

const initialState = {
    weather: null,
    city: null,
    location: null,
    isLoading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_WEATHER_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        case GET_WEATHER_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case GET_WEATHER_SUCCESSED:
            return {
                ...state,
                weather: action.payload,
            };
        case GET_USER_LOCATION:
            return {
                ...state,
                location: action.payload,
            };
        default:
            return state;
    }
};

export { reducer };
