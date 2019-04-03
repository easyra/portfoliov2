import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const Navbar = props => {
  return (
    <header>
      <nav>
        <h1>Ezra Davis</h1>
        <div className='nav-items'>
          <a>About</a>
          <a>Projects</a>
          <a>Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
