import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ArrowIcons extends Component {
  handleKeyup = e => {
    if (e.keyCode && e.keyCode === 37) {
      this.moveLeft();
    } else if (e.keyCode && e.keyCode === 39) {
      this.moveRight();
    }
  };
  moveLeft = () => {
    const {
      title,
      history,
      pages,
      pagesHash,
      activeProject,
      changeFromContactPage
    } = this.props;
    if (activeProject !== undefined && this.moveProject('left')) {
      return;
    }
    const index = pagesHash[title] > 0 ? pagesHash[title] - 1 : pagesHash.last;

    //Allows React to show the third project when coming from the contact page
    if (
      changeFromContactPage &&
      title === 'contact' &&
      pages[index] === 'projects'
    ) {
      changeFromContactPage(true);
    }
    history.push(`/${pages[index]}`);
  };
  moveRight = () => {
    const { title, history, pages, pagesHash, activeProject } = this.props;
    if (activeProject !== undefined && this.moveProject('right')) {
      return;
    }
    const index = pagesHash[title] < pagesHash.last ? pagesHash[title] + 1 : 0;
    history.push(`/${pages[index]}`);
  };
  moveProject = direction => {
    const { activeProject, changeProject } = this.props;
    if (direction === 'left') {
      if (activeProject !== 0) {
        changeProject(-1);
        return true;
      }
    }
    if (direction === 'right') {
      if (activeProject !== 2) {
        changeProject(1);
        return true;
      }
    }
    return false;
  };

  render() {
    const { title, history } = this.props;

    return (
      <div className='arrow-icons'>
        <div>
          <i
            onClick={this.moveLeft}
            class='fas fa-arrow-alt-circle-left fa-6x'
          />
          <i
            onClick={this.moveRight}
            class='fas fa-arrow-alt-circle-right fa-6x'
          />
        </div>
      </div>
    );
  }
  componentDidMount() {
    const element = document.querySelector('body');
    element.addEventListener('keyup', this.handleKeyup);
  }
  componentWillUnmount() {
    const element = document.querySelector('body');
    element.removeEventListener('keyup', this.handleKeyup);
    const { changeFromContactPage } = this.props;
    if (changeFromContactPage) {
      changeFromContactPage(false);
    }
  }
}

export default withRouter(ArrowIcons);
