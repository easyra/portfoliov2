import React, { Component } from 'react';
import { ProfilePic, ArrowIcons } from '../../reducer';

class ProjectsContainer extends Component {
  state = {
    activeProject: 0
  };

  handleClick = e => {
    const activeProject = parseInt(e.target.getAttribute('data-id'));
    this.setState({ activeProject });
  };

  render() {
    const { pages, pagesHash } = this.props;
    const { activeProject } = this.state;
    return (
      <>
        <section class='projects'>
          <div className='projects-content'>
            <div className='projects-titles'>
              <h4
                data-id='0'
                onClick={activeProject !== 0 && this.handleClick}
                className={activeProject === 0 ? 'btn-active' : 'btn'}
              >
                MappaJob
              </h4>
              <h4
                data-id='1'
                onClick={activeProject !== 1 && this.handleClick}
                className={activeProject === 1 ? 'btn-active' : 'btn'}
              >
                Showcase
              </h4>
              <h4
                data-id='2'
                onClick={activeProject !== 2 && this.handleClick}
                className={activeProject === 2 ? 'btn-active' : 'btn'}
              >
                Lambda Notes
              </h4>
            </div>
            <div className='projects-summary'>
              <div className='projects-card'>
                <img src='https://i.imgur.com/eT2NrrM.png' />
                <div className='projects-links'>
                  <i class='fab fa-github fa-8x' />
                  <i class='fas fa-window-maximize fa-8x' />
                </div>
              </div>
              <h2>MappaJob</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tellus purus, pharetra non feugiat quis, luctus sit amet felis.
                Donec sed fringilla enim, nec maximus libero. Nam vitae gravida
                urna, ac dapibus mi. Suspendisse purus ex, molestie sed ex nec,
                congue laoreet magna. Fusce fermentum, leo nec commodo
                tincidunt, sapien erat cursus sem, sed semper odio diam et mi.
                Aliquam ornare vitae nunc a mollis. Nullam ac faucibus nunc, ut
                mattis augue.
              </p>
            </div>

            {/* <div className='projects-card'>
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
            </div> */}
          </div>
        </section>
        <ArrowIcons title='projects' pages={pages} pagesHash={pagesHash} />
      </>
    );
  }
}

export default ProjectsContainer;
