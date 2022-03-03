import { Home } from "./Home";
import { connect } from 'react-redux';

import { selectUserLocation } from "../../selectors/weather";
import { getUserLocation } from "../../actions/weather";
import {getLatestsPosts, getPosts, getPostsTypes} from "../../actions/posts";
import {selectLatestsPosts, selectPosts, selectPostsTypes} from "../../selectors/posts";
import {getFeatureActions} from "../../actions/feature";
import {selectFeatureActions} from "../../selectors/feature";

const mapStateToProps = (store) => {
    return {
        userLocation: selectUserLocation(store),
        postsTypes: selectPostsTypes(store),
        posts: selectPosts(store),
        latestsPosts: selectLatestsPosts(store),
        featureActions: selectFeatureActions(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        getUserLocation: (location) => dispath(getUserLocation(location)),
        getPostsTypes: () => dispath(getPostsTypes()),
        getPosts: () => dispath(getPosts()),
        getLatestsPosts: () => dispath(getLatestsPosts()),
        getFeatureActions: () => dispath(getFeatureActions()),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Home);
