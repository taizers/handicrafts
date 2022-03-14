import { PostsModeration } from "./PostsModeration";
import { connect } from 'react-redux';
import { getPosts, setCreatePostVisible, createPost  } from "../../actions/posts";
import { selectPosts, selectCreateUserPostIsVisible } from "../../selectors/posts";
import { createPostsType } from "../../actions/posts";

const mapDispathToProps = (dispath) => {
    return {
        getPosts: () => dispath(getPosts()),
        setVisible: (data) => dispath(setCreatePostVisible(data)),
        createPost: (post) => dispath(createPost(post)),
        createCategory: (post) => dispath(createPostsType(post)),
    }
};

const mapStateToProps = (store) => {
    return {
        posts: selectPosts(store),
        isVisible: selectCreateUserPostIsVisible(store),
    };
};

export default connect(mapStateToProps, mapDispathToProps)(PostsModeration);