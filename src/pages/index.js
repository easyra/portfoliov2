import React from "react"
import Layout from "../component/Layout"
import { Grid, Typography, makeStyles, Box } from "@material-ui/core"
import About from "../component/Home/About"
import Projects from "../component/Projects/Projects"
import { deepPurple, teal } from "@material-ui/core/colors"
import SpacingBlock from "../component/@shared/SpacingBlock"

export default function Home() {
  return (
    <Layout>
      <About />
      <SpacingBlock />
      <Projects />
    </Layout>
  )
}
