import React, { Component } from 'react';
import logo from './logo.svg';
import './sass_modules/index.scss';
import { AppContainer } from './reducer';
import { createMuiTheme } from '@material-ui/core/styles';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <AppContainer />
      </div>
    );
  }
}

export default App;
