import { Center, Anchor, Title, Stepper, Grid, Avatar, Text, List, Stack, Group } from "@mantine/core"
import Head from "next/head"
import Layout from "../components/layout"
import { NextPage } from "next"
import Publication from "../components/publication"
import Project from "../components/project"
import { activeProjects, schoolProjects, sideProjects, thesisProjects } from "../contents/projects"
import { publications } from "../contents/publications"
import TechBadge from "../components/techbadge"
import { TECH_BADGE_PARAMS } from "../contents/techbadge"

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
            I'm maining the TypeScript hero most of the time with Express and React, and I have occasionally worked with
            Solidity and Go. I'm curious about using Rust and Huff at some point. I love & use Circom for zero-knowledge
            applications. If needed, I may use Python.
            <Group position="center" my="md">
              {(
                [
                  "typescript",
                  "circom",
                  "go",
                  "solidity",
                  "react",
                  "next",
                  "git",
                  "bash",
                ] as (keyof typeof TECH_BADGE_PARAMS)[]
              ).map((type) => (
                <TechBadge type={type} />
              ))}
            </Group>
          </Text>

          {/* projects */}
          <Title order={1} my="md">
            Active Projects
          </Title>
          <Stack>
            {activeProjects.map((p, i) => (
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
