import { SignUp } from "./SignUp";
import { connect } from 'react-redux';
import { signUp } from '../../actions/auth';

const mapDispathToProps = (dispath) => {
    return {
        signUp: (data) => dispath(signUp(data)),
    }
};

export default connect(null, mapDispathToProps)(SignUp);