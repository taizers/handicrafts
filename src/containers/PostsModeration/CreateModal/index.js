import { CreateModal } from './CreateModal';
import { connect } from 'react-redux';
import { selectPostsTypes } from "../../../selectors/posts";

const mapDispathToProps = (dispath) => {
    return {
    }
};

const mapStateToProps = (store) => {
    return {
        types: selectPostsTypes(store),
    };
};

export default connect(mapStateToProps, mapDispathToProps)(CreateModal);
