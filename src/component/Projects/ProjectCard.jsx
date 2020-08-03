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
import { deepPurple, red } from "@material-ui/core/colors"

const placeholder =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consectetur quos qui, dolorum doloremque in?"

const ProjectCard = ({
  title = "PlaceHolder",
  stack = "ReactJS",
  children = placeholder,
  github,
  liveSite,
  img,
}) => {
  const [open, setOpen] = useState(false)

  const classes = useStyles()
  console.log(children)
  return (
    <>
      <Grid md={3} xs={12} style={{ margin: 15 }}>
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
                size="small"
                color="secondary"
              >
                Live Site
              </Button>
            )}
          </CardActions>
        </Card>
      </Grid>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className={classes.modal}
      >
        <Paper className={classes.modalPaper}>
          <img style={{ width: "100%" }} src={img} />
          <Typography color="secondary" className={classes.title} variant="h6">
            {title}
          </Typography>
          <Typography color="secondary" variant="caption">
            ({stack})
          </Typography>
          <Typography variant={"body1"}>{children}</Typography>
          <div style={{ display: "flex" ,justifyContent:'flex-end'}}>

           
            {github && (
              <Button
                href={github}
                target="__blank"
                size="small"
                color="secondary"
                variant='outlined'
              >
                GitHub
              </Button>
            )}
            {liveSite && (
              <Button
                href={liveSite}
                target="__blank"
                size="small"
                color="secondary"
                variant='outlined'
              >
                Live Site
              </Button>
            )}
          </div>
        </Paper>
      </Modal>
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
  },
  modalPaper: {
    margin: "15px auto",
    padding: 15,
    background: theme.primarybg,
    color: "#fff",
    maxWidth: 500,
    width: "100%",
  },
}))
