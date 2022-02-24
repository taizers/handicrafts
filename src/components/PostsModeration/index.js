import { PostsModeration } from "./PostsModeration";
import { connect } from 'react-redux';
import { getPosts, setCreatePostVisible } from "../../actions/posts";
import { selectPosts, selectCreateUserPostIsVisible } from "../../selectors/posts";

const mapDispathToProps = (dispath) => {
    return {
        getPosts: () => dispath(getPosts()),
        setVisible: (data) => dispath(setCreatePostVisible()),
    }
};

const mapStateToProps = (store) => {
    return {
        posts: selectPosts(store),
        isVisible: selectCreateUserPostIsVisible(store),
    };
};

export default connect(mapStateToProps, mapDispathToProps)(PostsModeration);