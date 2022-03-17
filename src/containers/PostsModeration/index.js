import { PostsModeration } from "./PostsModeration";
import { connect } from 'react-redux';
import { getPosts, setCreatePostVisible, createPost, getPostsTypes  } from "../../actions/posts";
import { selectPosts, selectCreatePostIsVisible, selectCreatePostIsLoading } from "../../selectors/posts";

const mapDispathToProps = (dispath) => {
    return {
        getPosts: () => dispath(getPosts()),
        getCategories: () => dispath(getPostsTypes()),
        setVisible: (data) => dispath(setCreatePostVisible(data)),
        createPost: (post) => dispath(createPost(post)),
    }
};

const mapStateToProps = (store) => {
    return {
        posts: selectPosts(store),
        isVisible: selectCreatePostIsVisible(store),
        isLoading: selectCreatePostIsLoading(store),
    };
};

export default connect(mapStateToProps, mapDispathToProps)(PostsModeration);
