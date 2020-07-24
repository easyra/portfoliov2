import React from "react"
import Layout from "../component/Layout"
import ezraPic from "../img/ezra.jpg"
import { Grid, Typography, makeStyles } from "@material-ui/core"

export default function Home() {
  const classes = useStyles()
  const renderAbout = () => (
    <Grid container justify="center">
      <Grid item xs={12} md>
        <img
          className={classes.ezra}
          style={{ width: 500, borderRadius: "50%" }}
          src={ezraPic}
          alt="Ezra Davis | Software Developer"
        />
      </Grid>
      <Grid item xs={12} md>
        <Typography variant="h2" component="h1">
          Ezra Davis | Software Developer
        </Typography>
      </Grid>
    </Grid>
  )
  return <Layout>{renderAbout()}</Layout>
}

const useStyles = makeStyles(theme => ({
  ezra: {
    borderRadius: "50%",
    maxWidth: 500,
    width: "100%",
    border: "5px solid #000",
  },
}))
