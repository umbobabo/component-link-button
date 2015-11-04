/* global window chai */
/* eslint-disable id-match */
import Button from '..';
import React from 'react';

describe('Button', () => {
  it('renders a link-button with a default classname and text', () => {
    const comp = new Button({
      children: 'have some text'
    }, {});

    comp.props.children.should.equal('have some text');
    comp.props.className.should.equal('link-button');
  });
  it('Can add more classNames and extra props', () => {
    const comp = new Button({
      className: 'testing',
      href: 'http://example.com/',
      onClick: dummy,
    }, {});

    function dummy(){}  // <- Great album

    comp.props.className.should.equal('link-button testing');
    comp.props.href.should.equal('http://example.com/');
    comp.props.onClick.should.equal(dummy);
  });
});
