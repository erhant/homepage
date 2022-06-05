import Project from "../components/project"
import { Grid, Stack, Tabs, Title } from "@mantine/core"
import Layout from "../components/layout"
import Head from "next/head"
import sideProjects from "../content/projects/side"
import schoolProjects from "../content/projects/school"
import thesisProjects from "../content/projects/thesis"

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects of Erhan Tezcan." key="desc" />
      </Head>
      <Layout>
        <>
          <Title order={1} mb="md">
            Projects
          </Title>

          <Tabs position="center" variant="outline">
            <Tabs.Tab label="Side">
              <Grid>
                {sideProjects.map((p, i) => (
                  <Grid.Col xs={12} md={6} key={i}>
                    <Project project={p} />
                  </Grid.Col>
                ))}
              </Grid>
            </Tabs.Tab>

            <Tabs.Tab label="School">
              <Grid>
                {schoolProjects.map((p, i) => (
                  <Grid.Col xs={12} md={6} key={i}>
                    <Project project={p} />
                  </Grid.Col>
                ))}
              </Grid>
            </Tabs.Tab>

            <Tabs.Tab label="Thesis">
              <Stack>
                {thesisProjects.map((p, i) => (
                  <Project project={p} key={i} />
                ))}
              </Stack>
            </Tabs.Tab>
          </Tabs>
        </>
      </Layout>
    </>
  )
}

export default Projects
