import { PostsModeration } from "./PostsModeration";
import { connect } from 'react-redux';
import { getHandicraftsList } from '../../actions/handicrafts';
import { selectHandicraftsList } from '../../selectors/handicrafts';

const mapDispathToProps = (dispath) => {
    return {
        getPosts: () => dispath(getHandicraftsList()),
    }
};

const mapStateToProps = (store) => {
    return {
        posts: selectHandicraftsList(store),
    };
};

export default connect(mapStateToProps, mapDispathToProps)(PostsModeration);