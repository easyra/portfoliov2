import React from "react"
import { makeStyles, Hidden } from "@material-ui/core"

const SpacingBlock = () => {
  const classes = useStyles()
  return (
    <Hidden smDown>
      <div className={classes.box} />
    </Hidden>
  )
}

export default SpacingBlock

const useStyles = makeStyles(theme => ({
  box: {
    background: theme.secondarybg || "red",
    padding: "2.5%",
    width: "100%",
  },
}))
