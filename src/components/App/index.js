import { App } from "./App";
import { connect } from 'react-redux';
import { selectLanguage } from '../../selectors/language';
import { getUser } from "../../actions/auth";
import { setLanguage } from "../../actions/language";

const mapStateToProps = (store, ownProps) => {
    return {
        ...ownProps,
        locale: selectLanguage(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        getUser: (id, token) => dispath(getUser(id, token)),
        setLanguage: (data) => dispath(setLanguage(data)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(App);