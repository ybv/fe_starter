import { render } from 'react-dom'
import { Provider } from 'react-redux'
import React, { Component } from 'react';
import { JssProvider } from 'react-jss';
import { withStyles, MuiThemeProvider } from 'material-ui/styles';
import createContext from './styles/createContext';

import store, { history } from './store'
import App from './containers/App'

const target = document.querySelector('#root')

const styles = (theme) => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    body: {
      margin: 0,
    },
  },
});


const AppWrapper = withStyles(styles)(App);
const context = createContext();

render(
  <Provider store={store}>
      <JssProvider registry={context.sheetsRegistry} jss={context.jss}>
        <MuiThemeProvider theme={context.theme} sheetsManager={context.sheetsManager}>
          <AppWrapper />
        </MuiThemeProvider>
      </JssProvider>
  </Provider>,
  target
)