import { Header } from "./Header";
import { connect } from 'react-redux';
import { selectUserId, selectUser } from '../../selectors/auth';
import { logOut } from "../../actions/auth";

const mapStateToProps = (store) => {
    return {
        userId: selectUserId(store),
        user: selectUser(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        logOut: () => dispath(logOut()),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Header);