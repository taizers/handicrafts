import { PostsForTypes } from "./PostsForTypes";
import { connect } from 'react-redux';

import { selectPostsTypes } from "../../selectors/posts";
import { getPostsTypes } from "../../actions/posts";

const mapStateToProps = (store) => {
    return {
        types: selectPostsTypes(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        getTypes: () => dispath(getPostsTypes()),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(PostsForTypes);
