/**
 *
 * Button.js
 *
 * Have not added stylesheet yet
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';

function Button(props) {
  const button = (
    <button href={props.href} onClick={props.onClick}>
      {Children.toArray(props.children)}
    </button>
  );

  return { button };
}

export default Button;
