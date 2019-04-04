import React, { Component } from 'react';
import {
  NavBar,
  AboutContainer,
  ArrowIcons,
  ProjectsContainer
} from '../reducer';
import { Route, Switch, Redirect } from 'react-router-dom';

class AppContainer extends Component {
  state = {
    pagesHash: { about: 0, projects: 1, contact: 2, last: 2 },
    pages: ['about', 'projects', 'contact']
  };
  render() {
    const { pagesHash, pages } = this.state;
    return (
      <>
        <NavBar />
        <Switch>
          <Route
            strict
            exact
            path='/about'
            render={() => (
              <AboutContainer pagesHash={pagesHash} pages={pages} />
            )}
          />
          <Route
            strict
            path='/projects'
            render={() => (
              <ProjectsContainer pagesHash={pagesHash} pages={pages} />
            )}
          />
          <Route
            strict
            exact
            path='/'
            render={() => (
              <AboutContainer pagesHash={pagesHash} pages={pages} />
            )}
          />
          <Redirect to='/' />
        </Switch>
      </>
    );
  }
}

export default AppContainer;
