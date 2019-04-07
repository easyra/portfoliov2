import React, { Component } from 'react';
import {
  NavBar,
  AboutContainer,
  ArrowIcons,
  ProjectsContainer,
  ContactContainer
} from '../reducer';
import { Route, Switch, Redirect } from 'react-router-dom';

class AppContainer extends Component {
  state = {
    pagesHash: { about: 0, projects: 1, contact: 2, last: 2 },
    pages: ['about', 'projects', 'contact'],
    fromContactPage: false
  };

  changeFromContactPage = bool => {
    this.setState({ fromContactPage: bool });
  };

  render() {
    const { pagesHash, pages, fromContactPage } = this.state;
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
              <ProjectsContainer
                pagesHash={pagesHash}
                pages={pages}
                fromContactPage={fromContactPage}
              />
            )}
          />
          <Route
            strict
            path='/contact'
            render={() => (
              <ContactContainer
                pagesHash={pagesHash}
                pages={pages}
                changeFromContactPage={this.changeFromContactPage}
              />
            )}
          />
          <Redirect to='/about' />
        </Switch>
      </>
    );
  }
}

export default AppContainer;
