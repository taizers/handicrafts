import { Handicraft } from "./Handicraft";
import { connect } from 'react-redux';
import { getComments } from '../../actions/comments';
import { selectComments } from '../../selectors/comments';
import { getPost } from "../../actions/posts";
import {selectPost} from "../../selectors/posts";

const mapStateToProps = (store) => {
    return {
        post: selectPost(store),
        comments: selectComments(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        getPost: (id) => dispath(getPost(id)),
        getComments: (postId) => dispath(getComments(postId)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Handicraft);
