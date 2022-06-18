import Head from "next/head"
import Layout from "../components/layout"
import { Text, Divider, Tooltip, Space, Title, Avatar, Grid, Center, Anchor } from "@mantine/core"
import FancyWord from "../components/fancy-word"
import DevStacks from "../components/about/dev-stacks"
import Education from "../components/about/education"
import Experience from "../components/about/experience"
import { NextPage } from "next"

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About Erhan." key="desc" />
      </Head>
      <Layout>
        <>
          <Title order={1} mb="md">
            About me
          </Title>

          <Grid grow gutter="md" justify="center" align="center">
            <Grid.Col xs={12} sm={2}>
              <Avatar src="/assets/me.webp" alt="it is I, Erhan" size={150} radius={100} sx={{ margin: "auto" }} />
            </Grid.Col>
            <Grid.Col xs={12} sm={9}>
              <Text sx={{ fontSize: "1.2em" }} my="lg">
                Hello! I am Erhan, a full-stack developer from Istanbul, Turkey. I build &amp; engineer computer
                software; driven by a thirst for knowledge and with respect to style, standards, security and
                scalability.
              </Text>
            </Grid.Col>
          </Grid>

          <Text mx="sm" my="md">
            I have obtained my B.Sc. in Computer Engineering from Y&#x131;ld&#x131;z Technical University on February
            2019, and then I have recently obtained my M.Sc. in Computer Science &amp; Engineering from Koç University
            on February 2022. Most of my study has been on the more theoretical computer science part; I really enjoy
            cryptography and theory of computation in particular and I plan on working more on the Web3 in future!{" "}
            <Tooltip label="We are all gonna make it 🚀" position="bottom">
              <FancyWord word="#WAGMI" />
            </Tooltip>
          </Text>

          <Title order={2} my="md">
            Technology
          </Title>

          <DevStacks />

          <Text mx="sm" mt="md">
            My tech-stack is TypeScript oriented, with NextJS for frontend and Node+Express for backend. As for Web3, I
            use Solidity. I make use of component libraries on frontend, mostly MantineUI; using Sass if need be. I
            enjoy following standards and clean-coding practices, valuing simple over complex.
          </Text>

          <Title order={2} my="md">
            Background
          </Title>

          <Grid justify="space-between">
            <Grid.Col sm={5.5}>
              <Divider my="xl" label="Education" labelPosition="center" />
              <Education />
            </Grid.Col>
            <Grid.Col sm={5.5}>
              <Divider my="xl" label="Experience" labelPosition="center" />
              <Experience />
            </Grid.Col>
          </Grid>

          <Title order={2} my="md">
            Trivia
          </Title>

          <Text>
            The favicon is just a &amp; symbol in Courier Prime font. My name and surname initials together make
            <kbd>&quot;et&quot;</kbd>, which is latin for <kbd>&quot;and&quot;</kbd>. This is where the &amp; symbol
            originates from, which I also think to be a cool symbol. I used to game a lot, maybe hit me up on Steam ✨{" "}
            <Anchor href="https://steamcommunity.com/id/erhanyyy" target="_blank">
              erhany
            </Anchor>
            ✨
          </Text>
        </>
      </Layout>
    </>
  )
}

export default About
