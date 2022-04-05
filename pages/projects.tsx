import Project from "../components/project"
import { Grid } from "@mantine/core"
import Layout from "../components/layout"
import Head from "next/head"

const projects = [
  {
    title: "Test",
    description: "something something fkdsjhkjdhgkjsh",
  },
]

const Projects = () => {
  return (
    <>
      <Head>
        <title>My projects.</title>
      </Head>
      <Layout>
        <Grid>
          {projects.map((p, i) => {
            return (
              <Grid.Col xs={12} md={6} lg={3} key={i}>
                <Project title={p.title} description={p.description} />
              </Grid.Col>
            )
          })}
        </Grid>
      </Layout>
    </>
  )
}

export default Projects
