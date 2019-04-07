import React, { Component } from 'react';
import { ProfilePic, ArrowIcons } from '../../reducer';
import { withRouter } from 'react-router-dom';

class AboutContainer extends Component {
  handleContact = () => {
    this.props.history.push('/contact');
  };
  handleProjects = () => {
    this.props.history.push('/projects');
  };
  render() {
    const { pages, pagesHash } = this.props;
    return (
      <>
        <section class='about'>
          <div className='about-content'>
            <ProfilePic />
            <h1>Ezra Davis</h1>

            <div className='about-btns'>
              <h4 className='btn'>Learn More</h4>
              <h4 className='btn' onClick={this.handleProjects}>
                Go To Projects
              </h4>
              <h4 className='btn' onClick={this.handleContact}>
                Contact Me!
              </h4>
            </div>
            <div className='about-links'>
              <a href='https://github.com/easyra' target='_blank'>
                <i class='fab fa-github fa-2x' />
              </a>
              <a href='https://www.linkedin.com/in/ezra-davis/' target='_blank'>
                <i class='fab fa-linkedin fa-2x' />
              </a>
            </div>
          </div>
        </section>
        <ArrowIcons title='about' pages={pages} pagesHash={pagesHash} />
      </>
    );
  }
}

export default withRouter(AboutContainer);
