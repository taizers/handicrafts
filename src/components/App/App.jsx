import Main from '../../containers/Main';
import Login from '../Login/index';
import SignUp from '../SignUp/index';
import { pathToMainPage, pathToSignIn, pathToSignUp } from '../../constants';
import { Route, Switch, Redirect } from 'react-router-dom';
import NonAuthorizedRoute from '../../Routes/NonAuthorizedRoute/index';

export const App = ({signedIn}) => {
  console.log(signedIn);
  return <Switch>
      <Route path={pathToMainPage}><Main /></Route>
      <Redirect exact from='/' to={pathToMainPage} />
      <NonAuthorizedRoute exact patch={pathToSignIn}  component={Login} />
      <NonAuthorizedRoute exact patch={pathToSignUp}  component={SignUp} />
      <Redirect to='/' />
    </Switch>

};
