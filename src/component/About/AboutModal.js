import React, { Component } from 'react';
import { ProfilePic } from '../../reducer';

class AboutModal extends Component {
  hideAboutModelBG = e => {
    if (e.target.classList.contains('about-modal')) {
      this.props.hideAboutModel();
    }
  };
  hideAboutModel = () => {
    this.props.hideAboutModel();
  };
  render() {
    return (
      <div className='about-modal' onClick={this.hideAboutModelBG}>
        <div className='modal-content'>
          <i class='fas fa-times' onClick={this.hideAboutModel} />
          <ProfilePic />
          <h1>Ezra Davis</h1>
          <h2>Software Developer</h2>
          <p>
            The problem solving involved with working in the tech industry has
            always been it’s greatest pull. Being able to do just that
            professionally is something I’ll never regret working towards. If
            anyone reading this sees hears the voice of someone willing to give
            it there all, I hope we can work together and build something great!
            You can view my projects in Accomplishment section down below or on
            my portfolio site here.
          </p>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    document.querySelector('body').addEventListener('keyup', e => {
      if (e.keyCode === 27) {
        this.hideAboutModel();
      }
    });
  };
  componentWillUnmount = () => {
    document.querySelector('body').removeEventListener('keyup', e => {
      if (e.keyCode === 27) {
        this.hideAboutModel();
      }
    });
  };
}

export default AboutModal;
