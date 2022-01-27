import { connect } from 'react-redux';
import NonAuthorizedRoute from './NonAuthorizedRoute';

const mapStateToProps = ({ auth }) => ({
  signedIn: auth.signedIn,
});

export default connect(mapStateToProps)(NonAuthorizedRoute);
