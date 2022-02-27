import React, { useEffect } from 'react';

import Main from '../../containers/Main';
import Login from '../Login/index';
import SignUp from '../SignUp/index';
import { pathToHome, pathToSignIn, pathToSignUp } from '../../constants';
import { Route, Switch, Redirect } from 'react-router-dom';

import SuccessIcon from '@atlaskit/icon/glyph/check-circle';
import { G300 } from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';

import { AutoDismissFlag, FlagGroup } from '@atlaskit/flag';

export const App = ({ getUser }) => {
  const [flags, setFlags] = React.useState([1,2]);

  useEffect(()=>{
    const token = document.cookie.match(/token=(.+?)(;|$)/);
    token && getUser(token);
  },[])

  const addFlag = () => {
    const newFlagId = flags.length + 1;
    const newFlags = flags.slice();
    newFlags.splice(0, 0, newFlagId);

    setFlags(newFlags);
  };

  const handleDismiss = () => {
    setFlags(flags.slice(1));
  };

  return (
    <>
      <Switch>


        <Route exact path={pathToSignIn}><Login /></Route>
        <Route exact path={pathToSignUp}><SignUp /></Route>

        <Route path='/'><Main /></Route>

      </Switch>
      <FlagGroup onDismissed={handleDismiss}>
        {flags.map((flagId) => {
          return (
            <AutoDismissFlag
              id={flagId}
              icon={
                <SuccessIcon
                  primaryColor={token('color.icon.success', G300)}
                  label="Success"
                  size="medium"
                />
              }
              key={flagId}
              title={`#${flagId} Your changes were saved`}
              description="I will auto dismiss after 8 seconds."
            />
          );
        })}
      </FlagGroup>
    </>
    )

};
