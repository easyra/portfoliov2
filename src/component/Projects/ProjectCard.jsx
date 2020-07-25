import React from "react"
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Button,
  makeStyles,
} from "@material-ui/core"
import { deepPurple, red } from "@material-ui/core/colors"

const placeholder =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consectetur quos qui, dolorum doloremque in?"

const ProjectCard = ({ title = "PlaceHolder", children = placeholder }) => {
  const classes = useStyles()
  console.log(children)
  return (
    <Grid md={3} xs={12} style={{ margin: 15 }}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            src="https://www.youtube.com/embed/2olCl2gmKTY"
            component="iframe"
          />
          <CardContent>
            <Typography className={classes.title} variant="h6">
              {title}
            </Typography>
            <Typography variant="body1">
              {children.split(" ").slice(0, 25).join(" ")}
              {children.split(" ").length > 24 && "..."}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div style={{ flexGrow: 1 }}>
            <Button size="small" color="secondary" variant="contained">
              Watch Now
            </Button>
          </div>

          <Button size="small" color="secondary">
            GitHub
          </Button>
          <Button size="small" color="secondary">
            Live Site
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ProjectCard

const useStyles = makeStyles(theme => ({
  card: {
    background: theme.primarybg,
    color: "#fff",
  },
  title: {
    fontWeight: "bold",
  },
}))
