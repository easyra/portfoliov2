import React, { Component } from 'react';
import { ProfilePic, ArrowIcons, ProjectsSummary } from '../../reducer';

class ProjectsContainer extends Component {
  state = {
    activeProject: 0
  };

  handleClick = e => {
    const activeProject = parseInt(e.target.getAttribute('data-id'));
    this.setState({ activeProject });
  };
  changeProject = n => {
    const activeProject = this.state.activeProject + n;
    this.setState({ activeProject });
  };
  componentWillMount = () => {
    if (this.props.fromContactPage) {
      this.setState({ activeProject: 2 });
    }
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
            {activeProject === 0 && (
              <ProjectsSummary
                src='https://i.imgur.com/eT2NrrM.png'
                github=''
                deployed=''
                projectTitle='MappaJob'
                summary='    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              />
            )}
            {activeProject === 1 && (
              <ProjectsSummary
                src='https://i.imgur.com/OSya4oR.png'
                github=''
                deployed=''
                projectTitle='Showcase'
                summary='    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              />
            )}
            {activeProject === 2 && (
              <ProjectsSummary
                src='https://i.imgur.com/TPdivrC.png'
                github=''
                deployed=''
                projectTitle='LambdaNotes'
                summary='    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              />
            )}

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
        <ArrowIcons
          title='projects'
          pages={pages}
          pagesHash={pagesHash}
          activeProject={activeProject}
          changeProject={this.changeProject}
        />
      </>
    );
  }
}

export default ProjectsContainer;
