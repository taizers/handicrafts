import { LastPost } from "./LastPost";
import { connect } from 'react-redux';
import { getPost } from '../../../../actions/posts';

const mapStateToProps = (store) => {
    return {
    };
};

const mapDispathToProps = (dispath) => {
    return {
        getPost: (id) => dispath(getPost(id)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(LastPost);