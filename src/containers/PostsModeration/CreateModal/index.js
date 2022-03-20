import { CreateModal } from './CreateModal';
import { connect } from 'react-redux';
import { selectPostsTypes } from "../../../selectors/posts";
import { selectLanguage } from '../../../selectors/language';


const mapDispathToProps = (dispath) => {
    return {
    }
};

const mapStateToProps = (store) => {
    return {
        types: selectPostsTypes(store),
        locale: selectLanguage(store),
    };
};

export default connect(mapStateToProps, mapDispathToProps)(CreateModal);
