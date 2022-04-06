import Project from "../components/project"
import { Grid, Tabs } from "@mantine/core"
import Layout from "../components/layout"
import Head from "next/head"
import sideProjects from "../content/projects/side"
import schoolProjects from "../content/projects/school"
import thesisProjects from "../content/projects/thesis"

const dividerMargin = "md"
const horizontalSpacing = "lg"

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Layout>
        <Tabs>
          <Tabs.Tab label="Side Projects">
            <Grid>
              {sideProjects.map((p, i) => (
                <Grid.Col xs={12} md={6} key={i}>
                  <Project project={p} />
                </Grid.Col>
              ))}
            </Grid>
          </Tabs.Tab>

          <Tabs.Tab label="School Projects">
            <Grid>
              {schoolProjects.map((p, i) => (
                <Grid.Col xs={12} md={6} key={i}>
                  <Project project={p} />
                </Grid.Col>
              ))}
            </Grid>
          </Tabs.Tab>

          <Tabs.Tab label="Thesis Projects">
            <Grid>
              {thesisProjects.map((p, i) => (
                <Grid.Col xs={12} key={i}>
                  <Project project={p} />
                </Grid.Col>
              ))}
            </Grid>
          </Tabs.Tab>
        </Tabs>
      </Layout>
    </>
  )
}

export default Projects
