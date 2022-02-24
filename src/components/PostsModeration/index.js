import { PostsModeration } from "./PostsModeration";
import { connect } from 'react-redux';
import { getPosts } from "../../actions/posts";
import { selectPosts } from "../../selectors/posts";

const mapDispathToProps = (dispath) => {
    return {
        getPosts: () => dispath(getPosts()),
    }
};

const mapStateToProps = (store) => {
    return {
        posts: selectPosts(store),
    };
};

export default connect(mapStateToProps, mapDispathToProps)(PostsModeration);