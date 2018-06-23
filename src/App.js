import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'moment/locale/fr';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import jssExpand from 'jss-expand';

import store from './store';
import { MainRouter } from './router';
import { Snackbar } from './components/Snackbar';
import theme from './theme';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.use(jssExpand());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <JssProvider jss={jss} generateClassName={generateClassName}>
          <div>
            <CssBaseline />
            <MuiThemeProvider theme={theme}>
              <MainRouter />
              <Snackbar />
            </MuiThemeProvider>
          </div>
        </JssProvider>
      </Provider>
    );
  }
}

export default App;
