import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const Navbar = props => {
  return (
    <div>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography variant='h6' color='inherit'>
            Ezra Davis
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
