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
import { Switch, Route } from 'react-router-dom';

import EnsureLoggedIn from 'containers/EnsureLoggedIn/index'
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import WelcomePage from 'containers/WelcomePage/Loadable';

export default class App extends React.Component {

  componentDidUpdate(prevProps) {
    const { dispatch, redirectUrl } = this.props
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn

    if (isLoggingIn) {
      dispatch(navigateTo(redirectUrl))
    } else if (isLoggingOut) {
      // do any kind of cleanup or post-logout redirection here
    }
  }

  render() {
    return (
      <div>
        <Route path="/" component={WelcomePage}>
          {/* <Route path="cart" component={Cart}/> */}
          {/* <Route path="login" component={Login}/> */}

          <Route component={EnsureLoggedIn}>
            <Route path="/" component={HomePage}/>
            {/* <Route path="account" component={Account}/> */}
          </Route>
        </Route>
      </div>

    );
  }
}
