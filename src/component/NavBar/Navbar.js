import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav>
        <h1>Ezra Davis</h1>
        <div className='nav-items'>
          <NavLink activeClassName='selected' to='/about'>
            About
          </NavLink>
          <NavLink activeClassName='selected' to='/projects'>
            Projects
          </NavLink>
          <NavLink activeClassName='selected' to='/contact'>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default withRouter(Navbar);
