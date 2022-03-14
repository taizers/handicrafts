import { CommentEditor } from './CommentEditor';
import { connect } from 'react-redux';
import { isEmpty } from "lodash";
import { createComment, editComment } from '../../../../actions/comments';
import { selectUserId, selectUser } from '../../../../selectors/auth';

const mapStateToProps = (store) => {
    return {
        currentUserId: selectUserId(store),
        signedIn: !isEmpty(selectUser(store)),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        createComment: (comment) => dispath(createComment(comment)),
        editComment: (comment) => dispath(editComment(comment)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(CommentEditor);
