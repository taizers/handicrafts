import { Login } from "./Login";
import { connect } from 'react-redux';
import { signIn } from '../../actions/auth';

const mapDispathToProps = (dispath) => {
    return {
        signIn: (data) => dispath(signIn(data)),
    }
};

export default connect(null, mapDispathToProps)(Login);
