import { Center, Anchor, Title, Stepper, Grid, Avatar, Text, List, Stack, Group } from "@mantine/core"
import Head from "next/head"
import Layout from "../components/layout"
import { NextPage } from "next"
import Publication from "../components/publication"
import Project from "../components/project"
import { schoolProjects, sideProjects, thesisProjects } from "../contents/projects"
import { publications } from "../contents/publications"
import TechBadge from "../components/techbadge"

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title> e r h a n t . m e </title>
        <meta name="description" content="who dis?" key="desc" />
      </Head>
      <Layout>
        <>
          {/* about */}
          <Grid grow gutter="md" justify="center" align="center">
            <Grid.Col xs={12} sm={2}>
              <Avatar src="/assets/me.webp" alt="it is I" size={200} radius={100} sx={{ margin: "auto" }} />
            </Grid.Col>
            <Grid.Col xs={12} sm={9}>
              <Text sx={{ fontSize: "1.3em" }} my="lg">
                I'm a Full-stack Blockchain Developer from Istanbul, Turkey. I build &amp; engineer computer software;
                driven by a thirst for knowledge and with respect to style, standards, security and scalability.
              </Text>
            </Grid.Col>
          </Grid>

          {/* stack */}
          <Title order={1} my="md">
            Stack
          </Title>
          <Text>
            I'm maining the TypeScript hero most of the time, but I have occasionally worked with Solidity and Go. I'm
            curious about using Rust and Huff at some point. I love & use Circom for zero-knowledge stuff; though at
            some point after getting into Rust I would love to explore options there!
            <Group position="center" my="md">
              <TechBadge type="typescript" />
              <TechBadge type="circom" />
              <TechBadge type="go" />
              <TechBadge type="solidity" />
              <TechBadge type="react" />
              <TechBadge type="next" />
              <TechBadge type="git" />
              <TechBadge type="bash" />
            </Group>
          </Text>

          {/* projects */}
          <Title order={1} my="md">
            Projects
          </Title>
          <Stack>
            {sideProjects.map((p, i) => (
              <Project p={p} key={i} />
            ))}
            {thesisProjects.map((p, i) => (
              <Project p={p} key={i} />
            ))}
            {schoolProjects.map((p, i) => (
              <Project p={p} key={i} />
            ))}
          </Stack>

          {/* publications */}
          <Title order={1} my="md">
            Publications
          </Title>
          <Stack>
            {publications.map((p, i) => (
              <Publication p={p} key={i} />
            ))}
          </Stack>
        </>
      </Layout>
    </>
  )
}

export default Index
