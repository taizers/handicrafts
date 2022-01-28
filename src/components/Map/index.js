import { Map } from "./Map";
import { connect } from 'react-redux';
import { signInRequest } from '../../actions/auth';

const mapDispathToProps = (dispath) => {
    return {
        signIn: (data) => dispath(signInRequest(data)),
    }
};

export default connect(null, mapDispathToProps)(Map);
