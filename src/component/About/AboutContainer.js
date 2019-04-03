import React, { Component } from 'react';
import { ProfilePic } from '../../reducer';

class AboutContainer extends Component {
  render() {
    return (
      <section class='about'>
        <div className='about-content'>
          <div>
            <h1>Software Developer</h1>
            <p>
              I have been a problem solver ever since I’ve been able to type on
              a keyboard. Hope we can work together and make something great!
            </p>
          </div>
          <ProfilePic />
        </div>
      </section>
    );
  }
}

export default AboutContainer;
