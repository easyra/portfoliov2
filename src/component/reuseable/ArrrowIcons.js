import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ArrowIcons extends Component {
  handleKeyup = e => {
    if (e.keyCode && e.keyCode === 37) {
      this.moveLeft();
    } else if (e.keyCode && e.keyCode === 39) {
      this.moveRight();
      console.log('hi');
    }
  };
  moveLeft = () => {
    const { title, history, pages, pagesHash } = this.props;
    const index =
      pagesHash[title] - 1 > -1 ? pagesHash[title] - 1 : pagesHash.last;
    history.push(`/${pages[index]}`);
  };
  moveRight = () => {
    const { title, history, pages, pagesHash } = this.props;
    const index =
      pagesHash[title] + 1 < pagesHash.last ? pagesHash[title] + 1 : 0;
    history.push(`/${pages[index]}`);
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
}

export default withRouter(ArrowIcons);
