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
  const matches = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`)

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
            icon={<Avatar src="/assets/me.webp" alt="it is I, Erhan" size={100} radius={100} />}
            styles={{
              inner: { fontSize: "1.2em" },
              icon: { marginRight: "4.2em", marginLeft: "-0.5em" },
            }}
          >
            Hello! I am Erhan, a full-stack developer from Istanbul, Turkey. I build &amp; engineer computer software;
            driven by a thirst for knowledge and with respect to style, standards, security and scalability.
          </Blockquote>

          <Space h="lg" />
          <Text>
            My stack is Typescript-oriented, mostly on server-side programming and web. I use Python for many small
            side-projects.
          </Text>
          <DevStacks />
          <Text>
            My first ever-so-slightly-related programming experience was when I used the Doom 3 console to spawn zombies
            and props and such; around middle school... My first program is my freshman year first homework, which was a
            CandyCrush-like game but with numbers instead of candies, in console, with{" "}
            <Anchor href="https://en.wikipedia.org/wiki/Pascal_(programming_language)">Pascal</Anchor> (yeah, indeed).
            As of 2022, I am hopping on to the Web3.0 train.{" "}
            <Tooltip label="We are all gonna make it 🚀" position="bottom">
              <FancyWord word="#WAGMI" />
            </Tooltip>
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
        </>
      </Layout>
    </>
  )
}

export default About
