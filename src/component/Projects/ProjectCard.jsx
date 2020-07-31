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

const ProjectCard = ({ title = "PlaceHolder", stack='ReactJS', children = placeholder ,github,liveSite}) => {
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
            <Typography color='secondary' className={classes.title} variant="h6">
              {title}
            </Typography>  
            <Typography color='secondary' variant="caption">
              ({stack})
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
              More
            </Button>
          </div>

          {github && <Button href={github} target='__blank' size="small" color="secondary">
            GitHub
          </Button>}
          {liveSite && <Button href={liveSite} target='__blank' size="small" color="secondary">
            Live Site
          </Button>}
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
    lineHeight:1  
},
}))
