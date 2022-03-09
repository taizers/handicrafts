import { Home } from "./Home";
import { connect } from 'react-redux';

import { getPosts, getPostsTypes } from "../../actions/posts";
import { selectPosts, selectPostsTypes } from "../../selectors/posts";

const mapStateToProps = (store) => {
    return {
        postsTypes: selectPostsTypes(store),
        posts: selectPosts(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        getPostsTypes: () => dispath(getPostsTypes()),
        getPosts: () => dispath(getPosts()),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Home);
