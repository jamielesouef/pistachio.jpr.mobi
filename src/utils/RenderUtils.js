import TestUtils from 'react-addons-test-utils';
import reactElementToJSXString from 'react-element-to-jsx-string';

export function toJSXString(jsx) {
  return reactElementToJSXString(jsx);
}

export function shallowRenderToString(component) {
  return reactElementToJSXString(shallowRender(component));
}

export var shallowRender = component => {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(component);
  return shallowRenderer.getRenderOutput();
};

export default {
  shallowRender,
  shallowRenderToString,
  toJSXString
};
