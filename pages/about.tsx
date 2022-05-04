import Head from "next/head"
import Layout from "../components/layout"
import {
  Text,
  Blockquote,
  Group,
  Anchor,
  Divider,
  List,
  Badge,
  Tooltip,
  Space,
  Title,
  Avatar,
  useMantineTheme,
  Grid,
} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import FancyWord from "../components/fancy-word"
import DevStacks from "../components/about/dev-stacks"
import Education from "../components/about/education"
import Experience from "../components/about/experience"

const About = () => {
  const theme = useMantineTheme()
  const greaterThanSM = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`)

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

          <Blockquote
            cite=""
            icon={greaterThanSM ? <Avatar src="/assets/me.webp" alt="it is I, Erhan" size={100} radius={100} /> : <></>}
            styles={
              greaterThanSM
                ? {
                    inner: { fontSize: "1.2em" },
                    icon: { marginRight: "4.2em", marginLeft: "-0.5em" },
                  }
                : {
                    inner: { fontSize: "1.2em" },
                  }
            }
          >
            Hello! I am Erhan, a full-stack developer from Istanbul, Turkey. I build &amp; engineer computer software;
            driven by a thirst for knowledge and with respect to style, standards, security and scalability.
          </Blockquote>

          <Text mx="sm" my="md">
            I obtained my B.Sc. in Computer Engineering from Y&#x131;ld&#x131;z Technical University, and then I have
            recently obtained my M.Sc. in Computer Science &amp; Engineering from Koç University. Most of my study has
            been on the more theoretical computer science part, rather than development (e.g. mobile, devops). I really
            enjoy cryptography and theory of computation in particular. I am currently working as a self-employed
            full-stack developer in Macerita, a fresh startup! I plan on working more on the web3 side of things in
            future; as in the end I believe{" "}
            <Tooltip label="We are all gonna make it 🚀" position="bottom">
              <FancyWord word="#WAGMI" />
            </Tooltip>
            .
          </Text>

          <DevStacks />
          {/* <Text>
            My first ever-so-slightly-related programming experience was when I used the Doom 3 console to spawn zombies
            and props and such; around middle school... My first program is my freshman year first homework, which was a
            CandyCrush-like game but with numbers instead of candies, in console, with{" "}
            <Anchor href="https://en.wikipedia.org/wiki/Pascal_(programming_language)">Pascal</Anchor> (yeah, indeed).
            As of 2022, I am hopping on to the Web3.0 train.{" "}
            <Tooltip label="We are all gonna make it 🚀" position="bottom">
              <FancyWord word="#WAGMI" />
            </Tooltip>
          </Text> */}
          <Text mx="sm" mt="md">
            My tech-stack is TypeScript oriented, with NextJS for frontend and Node+Express for backend. As for Web3, I
            use Solidity mostly with EVM-compatible chains. I make use of component libraries on frontend, mostly
            MantineUI; though I may use SASS if need be. I enjoy following standards and clean-coding practices. I
            believe it is more valuable that the code is simple, yet generic enough; rather than complex and
            all-purpose.
          </Text>

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

          <Space h="lg" />
        </>
      </Layout>
    </>
  )
}

export default About
