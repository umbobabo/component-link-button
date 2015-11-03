import React from 'react';

const defaultPreventer = (ev) => {
  ev.preventDefault()
};

export default function Button (props) {
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

Button.propTypes = {
  href: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element,
    React.PropTypes.array,
  ]),
  onClick: React.PropTypes.func,
  disabled: React.PropTypes.bool,
}

