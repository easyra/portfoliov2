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
                github='https://github.com/Lambda-School-Labs/Labs8-DeveloperMap'
                deployed='https://www.mappajob.com/'
                projectTitle='MappaJob'
                summary=''
                summary='MappaJob is a map-based application geared towards helping job seekers find employers and vice-versa in a specific geographic area. This project was created by a team of four using a FERN stack consisting of the technologies: Firebase, Express.js, React, and Node.js. My responsibilities involved work in the both the front-end and back-end of this projects. Some of these responsibilities include designing a maintainable backend REST API, Implementing reusable React Components for interactive user experience, reviewing contributions and pull requests for the project and more.
                '
              />
            )}
            {activeProject === 1 && (
              <ProjectsSummary
                src='https://i.imgur.com/OSya4oR.png'
                github='https://github.com/easyra/coding-class-showcase'
                deployed='https://showcase-projects.netlify.com/'
                projectTitle='Showcase'
                summary='Showcase is a web application meant to allow teachers to display their students projects publicly to the internet. Teachers are able to create rooms that where students can post information about their project. The information then gets turned into a card the represents all that information about the projects. I created this project using Firebase and React.js.'
              />
            )}
            {activeProject === 2 && (
              <ProjectsSummary
                src='https://i.imgur.com/TPdivrC.png'
                github='https://github.com/easyra/back-end-project-week'
                deployed='https://lambdanotes-ezra.netlify.com/notes'
                projectTitle='LambdaNotes'
                summary='Lambda Notes is a note taking application that allows users to organize their information in an efficient manner. Users are able to post notes to a REST API and have those notes be displayed for everyone to see. Lambda Notes also has other features that create a more enjoyable experience for users such as support for premade themes, tagging support for notes, and the ability to search by note title or tag. I created this project using Reactjs, SQLite, Nodejs, and Expressjs. '
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
