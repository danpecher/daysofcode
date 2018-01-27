require('react-hot-loader/patch')
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from '../components/App.jsx'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('../components/App.jsx', () => {
    const NextRootContainer = require('../components/App.jsx').default;
    render(NextRootContainer);
  });
}