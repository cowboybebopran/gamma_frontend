/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute/index';
import HomePage from 'containers/HomePage/index';
import LoginPage from 'containers/LoginPage/index';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
import WelcomePage from 'containers/WelcomePage/Loadable';


export default function App() {
  return (
    <div>
      <Route path="/" exact component={WelcomePage} />
      <Route path="/login" exact component={LoginPage} />
      <PrivateRoute path="/home" component={HomePage} />
    </div>
  );
}
