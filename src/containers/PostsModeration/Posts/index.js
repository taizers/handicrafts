import { Posts } from "./Posts";
import { connect } from 'react-redux';
import { deletePost } from '../../../actions/posts';
import {selectLanguage} from "../../../selectors/language";

const mapDispathToProps = (dispath) => {
    return {
        deletePost: (id) => dispath(deletePost(id)),
    }
};

const mapStateToProps = (store) => {
    return {
        language: selectLanguage(store).split(0,2),
    };
};

export default connect(mapStateToProps, mapDispathToProps)(Posts);