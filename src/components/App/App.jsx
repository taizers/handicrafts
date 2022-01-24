import Main from '../../containers/Main';
import Login from '../Login/index';
import SignUp from '../SignUp/index';
import { pathToMainPage, pathToSignIn, pathToSignUp } from '../../constants';
import { Route, Switch, Redirect } from 'react-router-dom';

export const App = ({signedIn}) => {
  console.log(signedIn);
  return <Switch>
      <Route path={pathToMainPage}><Main /></Route>
      <Route exact path={pathToSignIn}><Login /></Route>
      <Route exact path={pathToSignUp}><SignUp /></Route>
      {signedIn ? <Redirect from="*" to={pathToMainPage} /> : <Redirect from="*" to={pathToSignIn} />}
    </Switch>

};
