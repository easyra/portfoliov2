import React, { Component } from 'react';
import { NavBar, AboutContainer, ArrowIcons } from '../reducer';
import { Route, Switch, Redirect } from 'react-router-dom';

class AppContainer extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route strict exact path='/about' component={AboutContainer} />
          <Route strict exact path='/' component={AboutContainer} />
          <Redirect to='/' />
        </Switch>

        <ArrowIcons title='about' />
      </>
    );
  }
}

export default AppContainer;
