import { Header } from "./Header";
import { connect } from 'react-redux';
import { selectUserSignedIn } from '../../selectors/auth';

const mapStateToProps = (store) => {
    return {
        signedIn: selectUserSignedIn(store),
    };
};

export default connect(mapStateToProps)(Header);