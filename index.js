import React from 'react';
import ReactDOM from 'react-dom';
import KruisApp from './views/App';
import { AppContainer } from 'react-hot-loader'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app'),
  )
}

render(KruisApp)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./views/App', () => render(require('./views/App').default));
}