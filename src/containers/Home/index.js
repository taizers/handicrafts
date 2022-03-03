import { Home } from "./Home";
import { connect } from 'react-redux';

import { selectUserLocation } from "../../selectors/weather";
import { getUserLocation } from "../../actions/weather";
import { getPosts, getPostsTypes } from "../../actions/posts";
import { selectPosts, selectPostsTypes } from "../../selectors/posts";

const mapStateToProps = (store) => {
    return {
        userLocation: selectUserLocation(store),
        postsTypes: selectPostsTypes(store),
        posts: selectPosts(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        getUserLocation: (location) => dispath(getUserLocation(location)),
        getPostsTypes: () => dispath(getPostsTypes()),
        getPosts: () => dispath(getPosts()),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Home);
