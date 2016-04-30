'use strict';

jest.unmock('../app');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import RenderUtils from '../../utils/RenderUtils';
import App from '../app';

describe('App', function () {
  it('should render the app container', function() {
    const component = RenderUtils.shallowRender(<App />);

    console.log('component', component);

    expect(RenderUtils.toJSXString(component)).toEqual("<div>");
  })
});
