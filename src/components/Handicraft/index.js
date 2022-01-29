import { Handicraft } from "./Handicraft";
import { connect } from 'react-redux';
import { getHandicraft } from '../../actions/handicrafts';
import { getComments } from '../../actions/comments';
import { selectHandicraft } from '../../selectors/handicrafts';
import { selectComments } from '../../selectors/comments';

const mapStateToProps = (store) => {
    return {
        handicraft: selectHandicraft(store),
        comments: selectComments(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        getHandicraft: (id) => dispath(getHandicraft(id)),
        getComments: (postId) => dispath(getComments(postId)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Handicraft);
