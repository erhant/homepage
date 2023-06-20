import { Center, Anchor, Title, Stepper, Grid, Avatar, Text, List } from "@mantine/core"
import Head from "next/head"
import Layout from "../components/layout"
import { NextPage } from "next"
import Publication from "../components/publications"
import Project from "../components/project"

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>🥂</title>
        <meta name="description" content="who dis?" key="desc" />
      </Head>
      <Layout>
        <>
          {/* about */}
          <Grid grow gutter="md" justify="center" align="center">
            <Grid.Col xs={12} sm={2}>
              <Avatar src="/assets/me.webp" alt="it is I" size={150} radius={100} sx={{ margin: "auto" }} />
            </Grid.Col>
            <Grid.Col xs={12} sm={9}>
              <Text sx={{ fontSize: "1.2em" }} my="lg">
                I'm a Full-stack Blockchain Developer from Istanbul, Turkey. I build &amp; engineer computer software;
                driven by a thirst for knowledge and with respect to style, standards, security and scalability.
              </Text>
            </Grid.Col>
          </Grid>

          {/* stack */}
          <Title order={2} my="md">
            Stack
          </Title>
          <Text>I'm maining the TypeScript hero most of the time, (TODO) </Text>

          {/* projects */}
          <Title order={2} my="md">
            Projects
          </Title>
          <Text>fsdkhfjds</Text>

          {/* publications */}
          <Title order={2} my="md">
            Publications
          </Title>
          <List>
            <Publication>
              Erhan Tezcan, Tugba Torun, Fahrican Koşar, Kamer Kaya, and Didem Unat.{" "}
              <em>"Mixed and Multi-Precision SpMV for GPUs with Row-wise Precision Selection"</em>. IEEE 34th
              International Symposium on Computer Architecture and High Performance Computing (SBAC-PAD'22), November
              2-5, 2022, Bordeaux, France. 🏆<b>Received the Best Paper Award</b>🏆.
            </Publication>
            <Publication>
              Muhammet Abdullah Soytürk, Palwisha Akhtar, Erhan Tezcan, and Didem Unat,{" "}
              <em>"Monitoring Collective Communication Among GPUs"</em>, European Conference on Parallel Processing
              (Workshop Paper), 2022
            </Publication>
            <Publication>
              Palwisha Akhtar, Erhan Tezcan, Fareed Mohammad Qararyah, Didem Unat,{" "}
              <em>"ComScribe: Identifying Intra-node GPU Communication"</em>, BENCH'20, November 2020
            </Publication>
            <Publication>
              Erhan Tezcan, <em>"A Lighthouse Illumniation Problem"</em>, arXiv e-prints, March 2019
            </Publication>
            <Publication>
              Erhan Tezcan, <em>"On Collatz Conjecture"</em>, arXiv e-prints, February 2019
            </Publication>
          </List>
        </>
      </Layout>
    </>
  )
}

export default Index
