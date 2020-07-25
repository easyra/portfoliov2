import React from "react"
import {
  Box,
  makeStyles,
  Grid,
  Typography,
  AppBar,
  Toolbar,
} from "@material-ui/core"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  const classes = useStyles()
  return (
    <Box className={classes.box} bgcolor="primary.main">
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography
            style={{ fontFamily: "Permanent Marker, cursive" }}
            variant="h4"
          >
            Projects
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container justify="space-around">
        <ProjectCard title="Lambda Notes">
          Lambda Notes is a note taking application that allows users to
          organize their information in an efficient manner. Users are able to
          post notes to a REST API and have those notes be displayed for
          everyone to see. Lambda Notes also has other features that create a
          more enjoyable experience for users such as support for premade
          themes, tagging support for notes, and the ability to search by note
          title or tag. I created this project using Reactjs, SQLite, Nodejs,
          and Expressjs.
        </ProjectCard>
        <ProjectCard />
        <ProjectCard />
      </Grid>
    </Box>
  )
}

export default Projects

const useStyles = makeStyles(theme => ({
  box: {
    width: "100%",
    padding: "25px 0",
  },
}))
