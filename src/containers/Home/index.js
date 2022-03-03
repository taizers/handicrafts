import { Home } from "./Home";
import { connect } from 'react-redux';

import { selectUserLocation } from "../../selectors/weather";
import { getUserLocation } from "../../actions/weather";

const mapStateToProps = (store) => {
    return {
        userLocation: selectUserLocation(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        getUserLocation: (location) => dispath(getUserLocation(location)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Home);
