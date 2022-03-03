import { CommentModeration } from "./CommentModeration";
import { connect } from 'react-redux';
import { getComments, deleteComment, editComment } from '../../actions/comments';
import { selectComments } from '../../selectors/comments';

const mapDispathToProps = (dispath) => {
    return {
        getComments: () => dispath(getComments()),
        deleteComment: (id) => dispath(deleteComment(id)),
        editComment: (data) => dispath(editComment(data)),
    }
};

const mapStateToProps = (store) => {
    return {
        comments: selectComments(store),
    };
};

export default connect(mapStateToProps, mapDispathToProps)(CommentModeration);