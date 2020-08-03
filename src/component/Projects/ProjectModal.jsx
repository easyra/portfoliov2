import React from "react"
import {
  Typography,
  Grid,
  Button,
  Modal,
  Paper,
  makeStyles,
} from "@material-ui/core"
import projectsdata from "./projectsdata"
import { useState } from "react"

const placeholder =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consectetur quos qui, dolorum doloremque in?"

const ProjectModal = ({ open, setOpen, index = 0 }) => {
  const classes = useStyles()
  const [pointer, setPointer] = useState(index)
  const handlePointer = x => {
    let n = pointer + x
    if (n >= projectsdata.length) {
      n = 0
    } else if (n < 0) {
      n = projectsdata.length - 1
    }
    setPointer(n)
  }

  const {
    title = "PlaceHolder",
    stack = "ReactJS",
    text = placeholder,
    github,
    liveSite,
    img = "https://imageog.flaticon.com/icons/png/512/16/16096.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
  } = projectsdata[pointer]

  return (
    <Modal open={open} onClose={() => setOpen(false)} className={classes.modal}>
      <Paper className={classes.modalPaper}>
        <img style={{ width: "100%" }} src={img} />
        <Typography color="secondary" className={classes.title} variant="h6">
          {title}
        </Typography>
        <Typography color="secondary" variant="caption">
          ({stack})
        </Typography>
        <Typography variant={"body1"} className={classes.text}>
          {text}
        </Typography>

        <div
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 15 }}
        >
          <div style={{ flexGrow: 1 }}>
            <Button
              onClick={() => handlePointer(1)}
              variant="contained"
              color="secondary"
              size="small"
            >
              next
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
              variant="outlined"
            >
              Live Site
            </Button>
          )}
        </div>
      </Paper>
    </Modal>
  )
}

export default ProjectModal

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
    overflow: "scroll",
  },
  modalPaper: {
    margin: 25,
    padding: 15,
    background: theme.primarybg,
    color: "#fff",
    maxWidth: 500,
    width: "100%",
    height: "100%",
    minHeight: 500,
    maxHeight: "80vh",
    overflowY: "scroll",
  },
  text: {
    //   height:'100%',
    //   minHeight:200,
    //   overflowY:'scroll'
  },
}))
