import { Profile } from "./Profile";
import { connect } from 'react-redux';
import { selectUser } from '../../selectors/auth';

const mapStateToProps = (store) => {
    return {
        user: selectUser(store),
    };
};

export default connect(mapStateToProps)(Profile);
