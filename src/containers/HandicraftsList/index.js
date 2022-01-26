import { HandicraftsList } from "./HandicraftsList";
import { connect } from 'react-redux';
import { getHandicraftsList } from '../../actions/handicrafts';
import { selectHandicraftsList } from '../../selectors/handicrafts';

const mapStateToProps = (store) => {
    return {
        handicraftsList: selectHandicraftsList(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        getHandicraftsList: () => dispath(getHandicraftsList()),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(HandicraftsList);