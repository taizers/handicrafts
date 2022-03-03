import { Weather } from "./Weather";
import { connect } from 'react-redux';

import {selectWeather} from "../../../selectors/weather";
import { getWeather } from "../../../actions/weather";

const mapStateToProps = (store) => {
    return {
        weather: selectWeather(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        getWeather: (location) => dispath(getWeather(location)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Weather);
