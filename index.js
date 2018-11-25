import React from 'react';
import ReactDOM from 'react-dom';
import KruisApp from './src/js/App';
import { AppContainer } from 'react-hot-loader'
require('!file-loader?name=[name].[ext]!./src/img/favicon.ico')

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
  module.hot.accept('./src/js/App', () => render(require('./src/js/App').default));
}
