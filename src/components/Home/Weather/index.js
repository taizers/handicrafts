import { Weather } from "./Weather";
import { connect } from 'react-redux';

import {selectWeather, selectWeatherCity} from "../../../selectors/weather";
import { getWeather } from "../../../actions/weather";

const mapStateToProps = (store) => {
    return {
        weather: selectWeather(store),
        weatherCity: selectWeatherCity(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        getWeather: () => dispath(getWeather()),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Weather);