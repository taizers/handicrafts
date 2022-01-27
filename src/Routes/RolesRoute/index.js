import { connect } from 'react-redux';
import RolesRoute from './RolesRoute';

const mapStateToProps = ({ auth, profile }) => ({
  signedIn: auth.signedIn,
  userRoles: profile.user ? profile.user.roles : undefined,
});

export default connect(mapStateToProps)(RolesRoute);
