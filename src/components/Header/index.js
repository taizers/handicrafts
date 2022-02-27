import { Header } from "./Header";
import { connect } from 'react-redux';
import { selectUserSignedIn, selectUserId } from '../../selectors/auth';

const mapStateToProps = (store) => {
    return {
        signedIn: selectUserSignedIn(store),
        userId: selectUserId(store),
    };
};

export default connect(mapStateToProps)(Header);