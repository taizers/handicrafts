import { Map } from "./Map";
import { connect } from 'react-redux';

import { selectUserLocation } from "../../../selectors/weather";

const mapStateToProps = (store) => {
    return {
        
    };
};

const mapDispathToProps = (dispath) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispathToProps)(Map);
