import { connect } from 'react-redux';
import AuthorizedRoute from './AuthorizedRoute';

const mapStateToProps = ({ auth }) => ({
  signedIn: auth.signedIn,
});

export default connect(mapStateToProps)(AuthorizedRoute);
