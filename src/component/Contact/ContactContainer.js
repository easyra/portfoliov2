import React, { Component } from 'react';
import { ArrowIcons } from '../../reducer';
import { Link } from 'react-router-dom';
const nodemailer = require('nodemailer');

class ContactContainer extends Component {
  state = {
    nameInput: '',
    emailInput: '',
    subjectInput: '',
    messageInput: ''
  };
  handleInput = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    const { nameInput, emailInput, subjectInput, messageInput } = this.state;
    if (nameInput && emailInput && subjectInput && messageInput) {
      console.log('wowowoow');
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ezra.rr.davis@gmail.com',
          pass: 'BFCE6BB25CEACB3'
        }
      });

      const mailOptions = {
        from: 'ezradavisdev@yahoo.com',
        to: 'ezra.rr.davis@gmail.com',
        subject: subjectInput,
        text: messageInput + `\nEmail: ${emailInput}`
      };
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          this.setState({
            nameInput: '',
            emailInput: '',
            subjectInput: '',
            messageInput: ''
          });
        }
      });
    }
  };
  render() {
    const { pages, pagesHash, changeFromContactPage } = this.props;
    const { nameInput, emailInput, subjectInput, messageInput } = this.state;
    return (
      <>
        <section className='contact'>
          <div className='contact-content'>
            <div className='contact-form'>
              <h2>Contact Me!</h2>
              <div className='contact-inputs'>
                <div>
                  <h4>Name:</h4>
                  <input
                    placeholder='ex: Joe Doe'
                    name='nameInput'
                    value={nameInput}
                    onChange={this.handleInput}
                  />
                </div>
                <div>
                  <h4>Email:</h4>
                  <input
                    placeholder='ex: example@email.com'
                    name='emailInput'
                    value={emailInput}
                    onChange={this.handleInput}
                  />
                </div>
                <div>
                  <h4>Subject:</h4>
                  <input
                    placeholder='ex: Interested in working with you!'
                    name='subjectInput'
                    value={subjectInput}
                    onChange={this.handleInput}
                  />
                </div>
                <div>
                  <h4>Message:</h4>
                  <textarea
                    placeholder='message'
                    name='messageInput'
                    value={messageInput}
                    onChange={this.handleInput}
                  />
                </div>

                <div
                  className={
                    nameInput && emailInput && subjectInput && messageInput
                      ? 'btn'
                      : 'btn-disabled'
                  }
                  onClick={this.handleSubmit}
                >
                  Submit
                </div>
              </div>
            </div>
            {/* Icons */}
            <div className='contact-links'>
              <h2>
                Find Me Here <i class='fas fa-arrow-down' />
              </h2>
              <div>
                <a href='https://github.com/easyra' target='_blank'>
                  <i class='fab fa-github fa-8x' />
                </a>
                <a
                  href='https://www.linkedin.com/in/ezra-davis/'
                  target='_blank'
                >
                  <i class='fab fa-linkedin fa-8x' />
                </a>
              </div>
            </div>
          </div>
        </section>
        <ArrowIcons
          title='contact'
          pages={pages}
          pagesHash={pagesHash}
          changeFromContactPage={changeFromContactPage}
          inputsNotEmpty={
            !!nameInput || !!emailInput || !!subjectInput || !!messageInput
          }
        />
      </>
    );
  }
}

export default ContactContainer;
