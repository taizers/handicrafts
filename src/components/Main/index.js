import { Main } from "./Main";
import { connect } from 'react-redux';
import { selectIsMainPageLoading } from '../../selectors/main';
import { selectLatestsPosts } from "../../selectors/posts";
import { selectUserLocation } from "../../selectors/weather";
import { selectFeatureActions } from "../../selectors/feature";
import { getUserLocation } from "../../actions/weather";
import { getPosts } from "../../actions/posts";

const mapStateToProps = (store) => {
    return {
        userLocation: selectUserLocation(store),
        latestsPosts: selectLatestsPosts(store),
        featureActions: selectFeatureActions(store),
        loading: selectIsMainPageLoading(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        getUserLocation: (location) => dispath(getUserLocation(location)),
        getPosts: () => dispath(getPosts()),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Main);
