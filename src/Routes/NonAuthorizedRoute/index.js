import { connect } from 'react-redux';
import NonAuthorizedRoute from './NonAuthorizedRoute';
import { isEmpty } from "lodash";
import { selectUser } from "../../selectors/auth";

const mapStateToProps = (store) => {
  return {
    signedIn: !isEmpty(selectUser(store)),
  };
};

export default connect(mapStateToProps)(NonAuthorizedRoute);
