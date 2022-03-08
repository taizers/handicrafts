import { App } from "./App";
import { connect } from 'react-redux';
import { selectUserSignedIn } from '../../selectors/auth';
import { selectLanguage } from '../../selectors/language';
import { getUser } from "../../actions/auth";
import { setLanguage } from "../../actions/language";

const mapStateToProps = (store, ownProps) => {
    return {
        ...ownProps,
        signedIn: selectUserSignedIn(store),
        locale: selectLanguage(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        getUser: (data) => dispath(getUser(data)),
        setLanguage: (data) => dispath(setLanguage(data)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(App);