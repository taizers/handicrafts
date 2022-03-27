import { PostItem } from "./PostItem";
import { connect } from 'react-redux';

import {selectLanguage} from "../../../selectors/language";

const mapDispathToProps = (dispath) => {
    return {
    }
};

const mapStateToProps = (store) => {
    return {
        language: selectLanguage(store).split(0,2),
    };
};

export default connect(mapStateToProps, mapDispathToProps)(PostItem);