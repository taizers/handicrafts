import { LanguageSwitсher } from "./LanguageSwitсher";
import { connect } from 'react-redux';
import {setLanguage} from "../../../actions/language";

const mapStateToProps = (store) => {
    return {
    };
};

const mapDispathToProps = (dispath) => {
    return {
        setLanguage: (locale) => dispath(setLanguage(locale)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(LanguageSwitсher);