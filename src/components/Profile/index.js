import { Profile } from "./Profile";
import { connect } from 'react-redux';
import { selectUser } from '../../selectors/auth';
import { getUser } from "../../actions/auth";

const mapStateToProps = (store) => {
    return {
        user: selectUser(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        getUser: (id) => dispath(getUser(id)),
    }
};


export default connect(mapStateToProps, mapDispathToProps)(Profile);
