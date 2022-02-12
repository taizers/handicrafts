import { CommentEditor } from './CommentEditor';
import { connect } from 'react-redux';
import { createComment, editComment } from '../../../../actions/comments';
import { selectUserId, selectUserSignedIn } from '../../../../selectors/auth';

const mapStateToProps = (store) => {
    return {
        currentUserId: selectUserId(store),
        signedIn: selectUserSignedIn(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        createComment: (comment) => dispath(createComment(comment)),
        editComment: (comment) => dispath(editComment(comment)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(CommentEditor);
