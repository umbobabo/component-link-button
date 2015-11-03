import React from 'react';

const Button = (props) => {
  const { className, children } = props;
  const extraClassNames = className ? className.split(/\s+/g) : [];
  return (
    <a role="button" {...props} className={['link-button'].concat(extraClassNames).join(' ')}>
      {children}
    </a>
  );
}

export default Button;

