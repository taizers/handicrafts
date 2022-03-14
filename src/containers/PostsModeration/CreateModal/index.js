import { CreateModal } from './CreateModal';
import { connect } from 'react-redux';
import {selectCreateUserPostIsLoading, selectPostsTypes} from "../../../selectors/posts";
import {selectCreateUserModalIsLoading} from "../../../selectors/auth";

const mapDispathToProps = (dispath) => {
    return {
    }
};

const mapStateToProps = (store) => {
    return {
        isLoading: selectCreateUserModalIsLoading(store),
        types: selectPostsTypes(store),
    };
};

export default connect(mapStateToProps, mapDispathToProps)(CreateModal);