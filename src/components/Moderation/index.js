import { Moderation } from "./Moderation";
import { connect } from 'react-redux';
import { getComments } from '../../actions/comments';
import { selectComments } from '../../selectors/comments';

const mapDispathToProps = (dispath) => {
    return {
        getComments: () => dispath(getComments()),
    }
};

const mapStateToProps = (store) => {
    return {
        comments: selectComments(store),
    };
};

export default connect(mapStateToProps, mapDispathToProps)(Moderation);
