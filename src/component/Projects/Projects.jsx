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
import projectsdata from "./projectsdata"

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
        {projectsdata.map(({ stack, title, github, liveSite, text }) => (
          <ProjectCard
            title={title}
            stack={stack}
            github={github}
            liveSite={liveSite}
          >
            {text}
          </ProjectCard>       
        ))}
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
