import React from 'react';

const defaultPreventer = (ev) => {
  ev.preventDefault()
};

const Button = (props) => {
  const { className, children, disabled } = props;
  const extraClassNames = className ? className.split(/\s+/g) : [];
  let onClick = props.onClick;
  if (disabled === true) {
    onClick = defaultPreventer;
    extraClassNames.push('link-button--disabled');
  }
  return (
    <a role="button" {...props} onClick={onClick} className={['link-button'].concat(extraClassNames).join(' ')}>
      {children}
    </a>
  );
}

export default Button;

