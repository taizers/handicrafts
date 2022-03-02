import {
    GET_WEATHER_SUCCESSED,
    GET_WEATHER_FAILED,
    SET_WEATHER_LOADING,
} from "../constants";

const initialState = {
    weather: null,
    city: null,
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
                weather: action.payload.weather,
                city: action.payload.city,
            };
        default:
            return state;
    }
};

export { reducer };