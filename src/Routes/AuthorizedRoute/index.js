import { connect } from 'react-redux';
import AuthorizedRoute from './AuthorizedRoute';
import { isEmpty } from "lodash";
import { selectUser } from "../../selectors/auth";

const mapStateToProps = (store) => {
  return {
    signedIn: !isEmpty(selectUser(store)),
  };
};

export default connect(mapStateToProps)(AuthorizedRoute);
