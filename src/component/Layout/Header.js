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
import links from "../@shared/links"

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
          <IconButton size="large" color="secondary" target='__blank' href={links.linkedIn}>
            <LinkedInIcon />
          </IconButton>
          {/* GitHub */}
          <IconButton color="secondary" target='__blank' href={links.github}>
            <GitHubIcon />
          </IconButton>
          {/* Resume */}
          <IconButton color="secondary" target='__blank' href={links.resume}>
            <WorkIcon />
          </IconButton>
          </Hidden>
          <Hidden xsDown>
            <Button color='secondary' startIcon={<LinkedInIcon />} target='__blank' href={links.linkedIn}>LinkedIn</Button>
            <Button color='secondary' startIcon={<GitHubIcon /> } target='__blank'href={links.github}>Github</Button>
            <Button color='secondary' startIcon={<WorkIcon />} target='__blank' href={links.resume}>Resume</Button>
          </Hidden>
        
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
