import { MapContainer } from "./MapContainer";
import { connect } from 'react-redux';
import { signIn } from '../../actions/auth';
import { selectHandicraftsList } from '../../selectors/handicrafts';
import { getHandicraftsList } from '../../actions/handicrafts';

const mapDispathToProps = (dispath) => {
    return {
        signIn: (data) => dispath(signIn(data)),
        getHandicraftsList: () => dispath(getHandicraftsList()),
    }
};

const mapStateToProps = (store) => {
    return {
        handicrafts: selectHandicraftsList(store),
    };
};

export default connect(mapStateToProps, mapDispathToProps)(MapContainer);