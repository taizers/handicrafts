import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SuccessIcon from '@atlaskit/icon/glyph/check-circle';
import { G300 } from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';
import { AutoDismissFlag, FlagGroup } from '@atlaskit/flag';
import {IntlProvider} from "react-intl";

import Main from '../Main';
import Login from '../Login/index';
import SignUp from '../SignUp/index';
import { pathToHome, pathToSignIn, pathToSignUp } from '../../constants';
import { messages } from "../../locales/messages";
import { LOCALES } from "../../locales/locales";
import NonAuthorizedRoute from "../../Routes/NonAuthorizedRoute/index";

export const App = ({ getUser, locale, setLanguage }) => {
  const [flags, setFlags] = React.useState([1,2]);

  useEffect(()=>{
    const token = document.cookie.match(/token=(.+?)(;|$)/);
    const userId = document.cookie.match(/userId=(.+?)(;|$)/);
    const language = document.cookie.match(/locale=(.+?)(;|$)/);

    token && userId && getUser(userId[1], token[1]);
    language && setLanguage(language[1]);
  },[]);

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
      <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.RUSSIAN}>
          <>
            <Switch>
              <NonAuthorizedRoute exact path={pathToSignIn}><Login /></NonAuthorizedRoute>
              <NonAuthorizedRoute exact path={pathToSignUp}><SignUp /></NonAuthorizedRoute>
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
        </IntlProvider>
    )

};
