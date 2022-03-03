import { LastPosts } from "./LastPosts";
import { connect } from 'react-redux';

import { selectLatestsPosts } from "../../../selectors/posts";
import { getLatestsPosts } from "../../../actions/posts";

const mapStateToProps = (store) => {
    return {
        latestsPosts: selectLatestsPosts(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        getLatestsPosts: () => dispath(getLatestsPosts()),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(LastPosts);