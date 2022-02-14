import { Comment } from './Comment';
import { selectUserId, selectUserRole, selectUserSignedIn } from '../../../../selectors/auth';
import { connect } from 'react-redux';
import { editComment, deleteComment } from '../../../../actions/comments';

const mapStateToProps = (store) => {
    return {
        currentUserId: selectUserId(store),
        currentUserRole: selectUserRole(store),
        signedIn: selectUserSignedIn(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        deleteComment: (id) => dispath(deleteComment(id)),
        moderateComment: (comment) => dispath(editComment(comment)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Comment);
