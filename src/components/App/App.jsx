import Main from '../../containers/Main';
import Login from '../Login/index';
import SignUp from '../SignUp/index';
import { pathToMainPage, pathToSignIn, pathToSignUp } from '../../constants';
import { Route, Switch, Redirect } from 'react-router-dom';
import NonAuthorizedRoute from '../../Routes/NonAuthorizedRoute/index';

export const App = ({signedIn}) => {
  console.log(signedIn);
  return <Switch>
      <Redirect exact from='/' to={pathToMainPage} />
      <Route path={pathToMainPage}><Main /></Route>
      <NonAuthorizedRoute patch={pathToSignIn}  component={Login} />
      <NonAuthorizedRoute patch={pathToSignUp}  component={SignUp} />
      <Redirect to='/' />
      {signedIn ? <Redirect to={pathToMainPage} /> : <Redirect to={pathToSignIn} />}
    </Switch>

};
