import React, { Component } from 'react';
import { ProfilePic, ArrowIcons } from '../../reducer';

class AboutContainer extends Component {
  render() {
    const { pages, pagesHash } = this.props;
    return (
      <>
        <section class='about'>
          <div className='about-content'>
            <div>
              <h2>Software Developer</h2>
              <p>
                I have been a problem solver ever since I’ve been able to type
                on a keyboard. Hope we can work together and make something
                great!
              </p>
            </div>
            <ProfilePic />
          </div>
        </section>
        <ArrowIcons title='about' pages={pages} pagesHash={pagesHash} />
      </>
    );
  }
}

export default AboutContainer;
