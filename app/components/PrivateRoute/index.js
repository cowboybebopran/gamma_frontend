import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={
        (props) =>
          ((localStorage.getItem('isLogin') === 'true') ? (
            <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: props.path },
                }}
              />
          )
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: React.PropTypes.object,
  path: React.PropTypes.object,
};
