import { SignUp } from "./SignUp";
import { connect } from 'react-redux';
import { signUp } from '../../actions/auth';
import {selectToken, selectUserProfile} from "../../selectors/auth";

const mapDispathToProps = (dispath) => {
    return {
        signUp: (user) => dispath(signUp(user)),
    }
};

export default connect(null, mapDispathToProps)(SignUp);