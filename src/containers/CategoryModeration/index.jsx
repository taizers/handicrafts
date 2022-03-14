import { CategoryModeration } from './CategoryModeration';
import { connect } from 'react-redux';
import {createPostsType, getPostsTypes, setCreatePostVisible} from "../../actions/posts";
import {selectCreateUserPostIsVisible, selectPostsTypes, selectCreateUserPostIsLoading} from "../../selectors/posts";
import {setCreateModalVisible} from "../../actions/auth";

const mapDispathToProps = (dispath) => {
    return {
        getCategories: () => dispath(getPostsTypes()),
        setVisible: (data) => dispath(setCreatePostVisible(data)),
        createCategory: data => dispath(createPostsType(data)),
    }
};

const mapStateToProps = (store) => {
    return {
        categories: selectPostsTypes(store),
        isVisible: selectCreateUserPostIsVisible(store),
        isLoading: selectCreateUserPostIsLoading(store),

    };
};

export default connect(mapStateToProps, mapDispathToProps)(CategoryModeration);