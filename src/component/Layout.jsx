import React from "react"
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import WorkIcon from "@material-ui/icons/Work"
import { deepPurple, yellow } from "@material-ui/core/colors"
import { makeStyles } from "@material-ui/styles"

const theme = createMuiTheme({
  palette: {
    primary: { main: deepPurple[900] },
    secondary: { main: yellow["A200"] },
  },
})

const Layout = ({ children }) => {
  const classes = useStyles()
  const renderHeader = () => (
    <AppBar elevation={0}>
      <Toolbar>
        <Typography style={{ flexGrow: 1 }} variant="h4" component="h1">
          ezra davis
        </Typography>
        {/* LinkedIn */}
        <IconButton color="secondary">
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
      </Toolbar>
    </AppBar>
  )
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.bg} />
      <div style={{ marginBottom: 80 }} />

      {renderHeader()}
      {children}
    </ThemeProvider>
  )
}

export default Layout

const useStyles = makeStyles(theme => ({
  "*": {
    color: "#000",
  },
  bg: {
    background: deepPurple[900],
    position: "fixed",
    width: "100%",
    height: "100%",
    zIndex: -1,
    left: 0,
    top: 0,
  },
}))
