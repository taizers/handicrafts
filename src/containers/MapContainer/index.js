import { MapContainer } from "./MapContainer";
import { connect } from 'react-redux';
import {selectPosts} from "../../selectors/posts";
import {getPosts} from "../../actions/posts";
import {selectUserLocation} from "../../selectors/weather";
import {getUserLocation} from "../../actions/weather";

const mapDispathToProps = (dispath) => {
    return {
        getPosts: () => dispath(getPosts()),
        getUserLocation: (data) => dispath(getUserLocation(data)),
    }
};

const mapStateToProps = (store) => {
    return {
        posts: selectPosts(store),
        userPosition: selectUserLocation(store),
    };
};

export default connect(mapStateToProps, mapDispathToProps)(MapContainer);