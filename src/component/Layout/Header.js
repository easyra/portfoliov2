import React from "react"
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  createMuiTheme,
  ThemeProvider,
  Hidden,
  Button,
} from "@material-ui/core"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import WorkIcon from "@material-ui/icons/Work"

const Header = () => {
  return (
    <AppBar elevation={4}>
      <Toolbar>
        <Typography
          style={{ fontFamily: "'Permanent Marker', cursive", flexGrow: 1 }}
          variant="h4"
          component="h1"
        >
          Ezra Davis
        </Typography>
        <div>
          <Hidden smUp>
              {/* LinkedIn */}
          <IconButton size="large" color="secondary">
            <LinkedInIcon />
          </IconButton>
          {/* GitHub */}
          <IconButton color="secondary">
            <GitHubIcon />
          </IconButton>
          {/* Resume */}
          <IconButton color="secondary">
            <WorkIcon />
          </IconButton>
          </Hidden>
          <Hidden xsDown>
            <Button color='secondary' startIcon={<LinkedInIcon />}>LinkedIn</Button>
            <Button color='secondary' startIcon={<GitHubIcon />}>Github</Button>
            <Button color='secondary' startIcon={<WorkIcon />}>Resume</Button>
          </Hidden>
        
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
