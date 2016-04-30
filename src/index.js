// @flow
/* global require module*/
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';
import App from './components/app';

const reactRoot = document.getElementById('react-root');

let render = () => {
  ReactDOM.render(<App />, reactRoot);
};

if (module.hot) {
  const renderApp = render;
  const renderError = error => {
    ReactDOM.render(<RedBox error={error} />, reactRoot);
  };

  render = () => {
    try {
      renderApp();
    } catch (error) {
      renderError(error);
    }
  };

  module.hot.accept('./components/app.js', () => {
    render();
  });
}

render();
