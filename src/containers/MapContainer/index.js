import { MapContainer } from "./MapContainer";
import { connect } from 'react-redux';
import {selectPosts} from "../../selectors/posts";
import {getPosts} from "../../actions/posts";

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

export default connect(mapStateToProps, mapDispathToProps)(MapContainer);