import React, { Component } from 'react';
import { NavBar, AboutContainer, ArrowIcons } from '../reducer';

class AppContainer extends Component {
  render() {
    return (
      <>
        <NavBar />
        <AboutContainer />
        <ArrowIcons title='about' />
      </>
    );
  }
}

export default AppContainer;
