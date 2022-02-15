import { App } from "./App";
import { connect } from 'react-redux';
import { selectUserSignedIn } from '../../selectors/auth';
import {getUser} from "../../actions/auth";

const mapStateToProps = (store, ownProps) => {
    return {
        ...ownProps,
        signedIn: selectUserSignedIn(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        getUser: (data) => dispath(getUser(data)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(App);