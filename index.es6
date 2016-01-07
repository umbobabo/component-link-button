import React from 'react';
import Icon from '@economist/component-icon';

const defaultPreventer = (ev) => {
  ev.preventDefault();
};
export default function Button(props) {
  const { className, children, disabled, shadow, icon, unstyled } = props;
  const extraClassNames = className ? className.split(/\s+/g) : [];
  let onClick = props.onClick;
  if (!unstyled) {
    extraClassNames.push('link-button--styled');
  }
  if (disabled === true) {
    onClick = defaultPreventer;
    extraClassNames.push('link-button--disabled');
  }
  if (shadow === true) {
    extraClassNames.push('link-button--shadow');
  }
  let content = children;
  const linkProps = {...props};

  if (icon) {
    extraClassNames.push('link-button--icon');
    extraClassNames.push(`link-button-icon--${icon.icon}`);
    if (icon.className) {
      extraClassNames.push(icon.className);
    }
    if (icon.color) {
      extraClassNames.push(`icon--${icon.icon}-${icon.color}`);
    }
    if (!icon.useBackground) {
      content = (
        <span className="link-button__group">
          <Icon {...icon} key="link-button__icon" />
          <span className="link-button__text" key="link-button__text">{content}</span>
        </span>
      );
    } else {
      extraClassNames.push('link-button--icon-background');
      linkProps.style = { backgroundRepeat: 'no-repeat' };
    }
    // We don't want this prop spreaded on <a> tag.
    delete linkProps.icon;
  }
  return (
    <a role="button" {...linkProps} onClick={onClick}
      className={[ 'link-button' ].concat(extraClassNames).join(' ')}
    >
      {content}
    </a>
  );
}

Button.propTypes = {
  href: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  children: React.PropTypes.node,
  onClick: React.PropTypes.func,
  disabled: React.PropTypes.bool,
  shadow: React.PropTypes.bool,
  unstyled: React.PropTypes.bool,
  icon: React.PropTypes.object,
};
