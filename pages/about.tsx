import Head from "next/head"
import Layout from "../components/layout"
import { Text, Divider, Tooltip, Title, Avatar, Grid, Group, Badge, Anchor, Button, List } from "@mantine/core"
import FancyWord from "../components/fancy-word"
import DevStacks from "../components/about/dev-stacks"
import Education from "../components/about/education"
import Experience from "../components/about/experience"
import type { NextPage } from "next"
import { School, Microscope, Books } from "tabler-icons-react"

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About Erhan." key="desc" />
      </Head>
      <Layout>
        <>
          {/* about */}
          <Title order={1} mb="md">
            About
          </Title>

          <Grid grow gutter="md" justify="center" align="center">
            <Grid.Col xs={12} sm={2}>
              <Avatar src="/assets/me.webp" alt="it is I" size={150} radius={100} sx={{ margin: "auto" }} />
            </Grid.Col>
            <Grid.Col xs={12} sm={9}>
              <Text sx={{ fontSize: "1.2em" }} my="lg">
                I'm a <FancyWord word="Full-stack Blockchain Developer" /> from Istanbul, Turkey. I build &amp; engineer
                computer software; driven by a thirst for knowledge and with respect to style, standards, security and
                scalability.
              </Text>
            </Grid.Col>
          </Grid>

          <Group position="center">
            <Anchor target="_blank" href="/cv.pdf">
              <Button variant="subtle" size="sm" leftIcon={<School size={22} />}>
                CV
              </Button>
            </Anchor>

            <Anchor target="_blank" href="/msc.pdf">
              <Button variant="subtle" size="sm" leftIcon={<Microscope size={22} />}>
                M.Sc. Transcript
              </Button>
            </Anchor>

            <Anchor target="_blank" href="/bsc.pdf">
              <Button variant="subtle" size="sm" leftIcon={<Books size={22} />}>
                B.Sc. Transcript
              </Button>
            </Anchor>
          </Group>
          <Title order={2} my="md">
            Technology
          </Title>
          <Text mx="sm" mt="md">
            My tech-stack is TypeScript oriented, with NextJS for frontend and Node+Express for backend. As for Web3, I
            use Solidity. I make use of component libraries on frontend, mostly MantineUI; using Sass if need be. I
            enjoy following standards and clean-coding practices, valuing simple over complex.
          </Text>

          <DevStacks />

          {/* background */}
          <Title order={2} my="md">
            Background
          </Title>

          <Text mx="sm" my="md">
            I have obtained my B.Sc. in Computer Engineering from Y&#x131;ld&#x131;z Technical University on February
            2019, and then my M.Sc. in Computer Science &amp; Engineering from Koç University on February 2022. Most of
            my study has been on the more theoretical computer science part; with special interests in cryptography. As
            of 2022, I am diving into the world of{" "}
            <Tooltip label="#WAGMI 🚀" position="bottom">
              <FancyWord word="Web 3.0" />
            </Tooltip>{" "}
            .
          </Text>

          {/* education & experience */}
          <Grid justify="space-between">
            <Grid.Col sm={5.5}>
              <Divider my="xl" label={<Title order={3}>Education</Title>} labelPosition="center" />
              <Education />
            </Grid.Col>
            <Grid.Col sm={5.5}>
              <Divider my="xl" label={<Title order={3}>Experience</Title>} labelPosition="center" />
              <Experience />
            </Grid.Col>
          </Grid>

          {/* publications */}
          <Title order={2} my="md">
            Publications
          </Title>

          <List>
            <List.Item mx="sm" my="md">
              Erhan Tezcan, Tugba Torun, Fahrican Koşar, Kamer Kaya, and Didem Unat.{" "}
              <em>"Mixed and Multi-Precision SpMV for GPUs with Row-wise Precision Selection"</em>. IEEE 34th
              International Symposium on Computer Architecture and High Performance Computing (SBAC-PAD'22), November
              2-5, 2022, Bordeaux, France. 🏆<b>Received the Best Paper Award</b>🏆.
            </List.Item>
            <List.Item mx="sm" my="md">
              Muhammet Abdullah Soytürk, Palwisha Akhtar, Erhan Tezcan, and Didem Unat,{" "}
              <em>"Monitoring Collective Communication Among GPUs"</em>, European Conference on Parallel Processing
              (Workshop Paper), 2022
            </List.Item>
            <List.Item mx="sm" my="md">
              Palwisha Akhtar, Erhan Tezcan, Fareed Mohammad Qararyah, Didem Unat,{" "}
              <em>"ComScribe: Identifying Intra-node GPU Communication"</em>, BENCH'20, November 2020
            </List.Item>
            <List.Item mx="sm" my="md">
              Erhan Tezcan, <em>"A Lighthouse Illumniation Problem"</em>, arXiv e-prints, March 2019
            </List.Item>
            <List.Item mx="sm" my="md">
              Erhan Tezcan, <em>"On Collatz Conjecture"</em>, arXiv e-prints, February 2019
            </List.Item>
          </List>
        </>
      </Layout>
    </>
  )
}

export default About
