import { Handicraft } from "./Handicraft";
import { connect } from 'react-redux';
import { getHandicraft } from '../../actions/handicrafts';
import { selectHandicraft } from '../../selectors/handicrafts';

const mapStateToProps = (store) => {
    return {
        handicraft: selectHandicraft(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        getHandicraft: (id) => dispath(getHandicraft(id)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Handicraft);
