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
        <title> p r o j e c ts </title>
        <meta name="description" content="projects" key="desc" />
      </Head>
      <Layout>
        <Stack>
          <Title order={1}>Active Projects</Title>
          {activeProjects.map((p, i) => (
            <Project p={p} key={i} />
          ))}

          <Title order={1}>Side Projects</Title>
          {sideProjects.map((p, i) => (
            <Project p={p} key={i} />
          ))}

          <Title order={1}>School Projects</Title>
          {schoolProjects.map((p, i) => (
            <Project p={p} key={i} />
          ))}

          <Title order={1}>Thesis Projects</Title>

          {thesisProjects.map((p, i) => (
            <Project p={p} key={i} />
          ))}
        </Stack>
      </Layout>
    </>
  )
}

export default Index
