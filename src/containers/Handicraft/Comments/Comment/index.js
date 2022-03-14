import { Comment } from './Comment';
import { selectUser, selectUserId, selectUserRole } from '../../../../selectors/auth';
import { connect } from 'react-redux';
import { editComment, deleteComment } from '../../../../actions/comments';
import { isEmpty } from "lodash";

const mapStateToProps = (store) => {
    return {
        currentUserId: selectUserId(store),
        currentUserRole: selectUserRole(store),
        signedIn: !isEmpty(selectUser(store)),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        deleteComment: (id) => dispath(deleteComment(id)),
        moderateComment: (comment) => dispath(editComment(comment)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Comment);
