import { App } from "./App";
import { connect } from 'react-redux';
import { selectUserSignedIn } from '../../selectors/users';

const mapStateToProps = (store, ownProps) => {
    return {
        ...ownProps,
        signedIn: selectUserSignedIn(store),
    };
};

export default connect(mapStateToProps)(App);