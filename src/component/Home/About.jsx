import React from "react"
import { Grid, Typography, makeStyles, Button, Paper } from "@material-ui/core"
import ezraPic from "../../img/ezra.jpg"
import links from "../@shared/links"
const About = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ padding: 5, marginBottom: "5%" }}
    >
      <Grid item xs={12} sm={8} md={4}>
        <img
          className={classes.ezra}
          src={ezraPic}
          alt="Ezra Davis | Software Developer"
        />
      </Grid>
      <Grid item xs={12} sm={8} md={4} className={classes.textwrapper}>
        <Paper elevation={4} className={classes.title}>
          <Typography
            variant="h5"
            component="h1"
            color="inherit"
            style={{ fontFamily: "Permanent Marker,cursive" }}
          >
            Ezra Davis: Software Developer
          </Typography>
        </Paper>

        <Typography variant="body1" gutterBottom>
          My name is Ezra Rami-Rennell Davis. I love to code. I love to work. I
          love to learn. I love to dig hours and hours losing myself in a
          project. I provide value to every project I'm on. I provide a helping
          hand to people who are struggling. I'm not afraid to reach out when
          I'm struggling myself. If you're looking a decent investment in your
          company, I'm an alright place to start.
        </Typography>
        <Button variant="contained" color="secondary" href='#projects'>
          Let's Look at My Projects
        </Button>
        <Button variant="outlined" style={{ marginLeft: 15 }} color="secondary"  target='__blank' href={links.resume}>
          Resume
        </Button>
      </Grid>
    </Grid>
  )
}

export default About

const useStyles = makeStyles(theme => ({
  ezra: {
    borderRadius: "50%",
    maxWidth: 500,
    width: "100%",
    boxShadow:
      "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)",
  },
  title: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: "5px 10px",
    marginBottom: 15,
    width: "max-content",
    [theme.breakpoints.down("sm")]: {
      width: "initial",
    },
  },
  textwrapper: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
}))
