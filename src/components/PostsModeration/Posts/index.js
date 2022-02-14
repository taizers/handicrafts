import { Posts } from "./Posts";
import { connect } from 'react-redux';
import { deletePost } from '../../../actions/posts';

const mapDispathToProps = (dispath) => {
    return {
        deletePost: () => dispath(deletePost()),
    }
};

const mapStateToProps = (store) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispathToProps)(Posts);