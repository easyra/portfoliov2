import React from "react"
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  createMuiTheme,
  ThemeProvider,
  Box,
} from "@material-ui/core"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import WorkIcon from "@material-ui/icons/Work"
import {
  deepPurple,
  yellow,
  grey,
  red,
  lightBlue,
  blue,
  orange,
  green,
  lightGreen,
  purple,
  cyan,
} from "@material-ui/core/colors"
import { makeStyles } from "@material-ui/styles"
import Header from "./Layout/Header"
import "./Layout/index.css"
import Footer from "./Layout/Footer"
import SEO from "./Layout/SEO"

const theme = createMuiTheme({
  palette: {
    primary: { main: grey[900] },
    secondary: { main: yellow["A400"] },
  },
  primarybg: purple["900"],
  secondarybg: cyan["A700"],
})

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <SEO/>
      <div className={classes.bg} />
      <Header />
      <div className={classes.wrapper}>{children}</div>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout

const useStyles = makeStyles(() => ({
  wrapper: {
    color: "#fff",
    marginTop: 80,
  },
  bg: {
    background: theme.primarybg,
    position: "fixed",
    width: "100%",
    height: "100%",
    zIndex: -1,
    left: 0,
    top: 0,
  },
}))
