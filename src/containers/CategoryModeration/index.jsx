import { CategoryModeration } from './CategoryModeration';
import { connect } from 'react-redux';
import { createPostsType, getPostsTypes, setCreatePostVisible,deletePostType } from "../../actions/posts";
import { selectCreatePostIsVisible, selectPostsTypes, selectCreatePostIsLoading } from "../../selectors/posts";
import {setCreateModalVisible} from "../../actions/auth";

const mapDispathToProps = (dispath) => {
    return {
        getCategories: () => dispath(getPostsTypes()),
        setVisible: (data) => dispath(setCreatePostVisible(data)),
        createCategory: data => dispath(createPostsType(data)),
        deleteCategory: id => dispath(deletePostType(id)),
    }
};

const mapStateToProps = (store) => {
    return {
        categories: selectPostsTypes(store),
        isVisible: selectCreatePostIsVisible(store),
        isLoading: selectCreatePostIsLoading(store),

    };
};

export default connect(mapStateToProps, mapDispathToProps)(CategoryModeration);
