import { Comment } from './Comment';
import { selectUserId, selectUserRole, selectUserSignedIn } from '../../../selectors/auth';
import { connect } from 'react-redux';

const mapStateToProps = (store) => {
    return {
        currentUserId: selectUserId(store),
        currentUserRole: selectUserRole(store),
        signedIn: selectUserSignedIn(store),
    };
};

export default connect(mapStateToProps)(Comment);
