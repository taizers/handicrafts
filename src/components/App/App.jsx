import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import {IntlProvider} from "react-intl";
import { Toaster } from 'react-hot-toast';

import Main from '../Main';
import Login from '../Login/index';
import SignUp from '../SignUp/index';
import { pathToSignIn, pathToSignUp } from '../../constants';
import { messages } from "../../locales/messages";
import { LOCALES } from "../../locales/locales";
import NonAuthorizedRoute from "../../Routes/NonAuthorizedRoute/index";

export const App = ({ getUser, locale, setLanguage }) => {
  useEffect(()=>{
    const token = document.cookie.match(/token=(.+?)(;|$)/);
    const userId = document.cookie.match(/userId=(.+?)(;|$)/);
    const language = document.cookie.match(/locale=(.+?)(;|$)/);

    token && userId && getUser(userId[1], token[1]);
    language && setLanguage(language[1]);
  },[]);

  return (
      <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.RUSSIAN}>
          <>
            <Switch>
              <NonAuthorizedRoute exact path={pathToSignIn}><Login /></NonAuthorizedRoute>
              <NonAuthorizedRoute exact path={pathToSignUp}><SignUp /></NonAuthorizedRoute>
              <Route path='/'><Main /></Route>
            </Switch>
            <Toaster 
              position="bottom-left"
            />
          </>
        </IntlProvider>
    )

};
