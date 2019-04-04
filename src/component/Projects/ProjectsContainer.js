import React, { Component } from 'react';
import { ProfilePic, ArrowIcons } from '../../reducer';

class ProjectsContainer extends Component {
  render() {
    const { pages, pagesHash } = this.props;
    return (
      <>
        <section class='projects'>
          <div className='projects-content'>
            <div className='projects-card'>
              <img src='https://i.imgur.com/eT2NrrM.png' />
              <h1>MappaJob</h1>
            </div>
            <div className='projects-card'>
              <img src='https://i.imgur.com/OSya4oR.png' />
              <h1>Showcase</h1>
            </div>
            <div className='projects-card'>
              <img src='https://i.imgur.com/TPdivrC.png' />
              <h1>Lambda Notes</h1>
            </div>
          </div>
        </section>
        <ArrowIcons title='projects' pages={pages} pagesHash={pagesHash} />
      </>
    );
  }
}

export default ProjectsContainer;
