import { LanguageSwitсher } from "./LanguageSwitсher";
import { connect } from 'react-redux';
import {setLanguage} from "../../../actions/language";
import {getWeather} from "../../../actions/weather";
import {selectUserLocation} from "../../../selectors/weather";

const mapStateToProps = (store) => {
    return {
        userLocation: selectUserLocation(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        setLanguage: (locale) => dispath(setLanguage(locale)),
        getWeather: (data) => dispath(getWeather(data)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(LanguageSwitсher);