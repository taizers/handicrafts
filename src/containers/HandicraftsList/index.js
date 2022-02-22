import { HandicraftsList } from "./HandicraftsList";
import { connect } from 'react-redux';
import { getPostsFromType } from '../../actions/posts';
import { selectPosts } from '../../selectors/posts';

const mapStateToProps = (store) => {
    return {
        posts: selectPosts(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        getPosts: (type) => dispath(getPostsFromType(type)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(HandicraftsList);