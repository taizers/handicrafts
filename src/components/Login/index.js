import { Login } from "./Login";
import { connect } from 'react-redux';
import { signInRequest } from '../../actions/users';

const mapDispathToProps = (dispath) => {
    return {
        signIn: (data) => dispath(signInRequest(data)),
    }
};

export default connect(null, mapDispathToProps)(Login);
