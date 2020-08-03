import React, { useState } from "react"
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
  Modal,
  Paper,
} from "@material-ui/core"
import ProjectModal from "./ProjectModal"

const placeholder =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consectetur quos qui, dolorum doloremque in?"

const ProjectCard = ({
  title = "PlaceHolder",
  stack = "ReactJS",
  children = placeholder,
  github,
  liveSite,
  index,
  img='https://imageog.flaticon.com/icons/png/512/16/16096.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF',
}) => {
  const [open, setOpen] = useState(false)

  const classes = useStyles()
  return (
    <>
      <Grid md={3} xs={10} style={{ margin: 15 }}>
        <Card className={classes.card}>
          <CardActionArea onClick={() => setOpen(true)}>
            <CardMedia
              image={img}
              height="140"
              alt={"Ezra Davis Project: " + stack}
              title={"Ezra Davis Project: " + stack}
              component="img"
            />
            <CardContent>
              <Typography
                color="secondary"
                className={classes.title}
                variant="h6"
              >
                {title}
              </Typography>
              <Typography color="secondary" variant="caption">
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
              <Button size="small" color="secondary" variant="contained" onClick={() => setOpen(true)}>
                More
              </Button>
            </div>

            {github && (
              <Button
                href={github}
                target="__blank"
                size="small"
                color="secondary"
              >
                GitHub
              </Button>
            )}
            {liveSite && (
              <Button
                href={liveSite}
                target="__blank"
                variant='outlined'
                size="small"
                color="secondary"
              >
                Live Site
              </Button>
            )}
          </CardActions>
        </Card>
      </Grid>
     {open &&<ProjectModal open={open} setOpen={setOpen} index={index}/>}
    </>
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
    lineHeight: 1,
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: 'scroll'
  },
  modalPaper: {
    margin: 25,
    padding: 15,
    background: theme.primarybg,
    color: "#fff",
    maxWidth: 500,
    width: "100%",
  },
}))
