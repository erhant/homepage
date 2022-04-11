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
      </Head>
      <Layout>
        <>
          <Title order={1} mb="md">
            About me
          </Title>

          <Blockquote
            cite=""
            icon={<Avatar src="/assets/me.JPG" alt="it is I, Erhan" size={100} radius={100} />}
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
              <Divider my="xl" label="Education" labelPosition={matches ? "left" : "center"} />
              <Education />
            </Grid.Col>
            <Grid.Col sm={5.5}>
              <Divider my="xl" label="Experience" labelPosition={matches ? "left" : "center"} />
              <Experience />
            </Grid.Col>
          </Grid>

          <Divider my="xl" label="Publications" labelPosition="center" />
          <Text>
            You can follow me on <Anchor href="https://www.researchgate.net/profile/Erhan-Tezcan">ResearchGate</Anchor>.
          </Text>
          <List>
            <List.Item>
              Palwisha Akhtar, Erhan Tezcan, Fareed Mohammad Qararyah, Didem Unat. “ComScribe: Identifying Intra-node
              GPU Communication“ BENCH'20 (November 2020)
            </List.Item>
            <List.Item>
              Erhan Tezcan. “On Collatz Conjecture.” arXiv: General Mathematics (February 2019, preprint)
            </List.Item>
            <List.Item>
              Erhan Tezcan. “A Lighthouse Illumination Problem.” arXiv: History and Overview (March 2019, preprint)
            </List.Item>
          </List>

          <Divider my="xl" label="Music" labelPosition="center" />
          <Text>I am an avid music-listener; consequently, I love making playlists. You might enjoy these:</Text>
          <Group my="sm" position="center">
            <Anchor href="https://open.spotify.com/playlist/1jOnw1TiUqDAxQd5SRPrLb?si=421fab6f5a294559">
              <Badge>Rock &amp; Blues</Badge>
            </Anchor>
            <Anchor href="https://open.spotify.com/playlist/29oizr6rN6Ct38A6nWxjTK?si=49914f3a98f84e37">
              <Badge>Jazz &amp; Funk &amp; Soul</Badge>
            </Anchor>
            <Anchor href="https://open.spotify.com/playlist/3v2LX32gUOGgqsGnBQbfri?si=83a171ee4e54420a">
              <Badge>Classical</Badge>
            </Anchor>
            <Anchor href="https://open.spotify.com/playlist/4U6slifCwWBnRPvhmeherf?si=bea017e4d90b4035">
              <Badge>Rap &amp; Trap</Badge>
            </Anchor>
            <Text>-</Text>
            <Anchor href="https://open.spotify.com/playlist/4GEXl9DjrgtOB020KpAUCm?si=fbeb307f988c419c">
              <Badge>🥁💓🎧</Badge>
            </Anchor>
            <Anchor href="https://open.spotify.com/playlist/4QJzN1UIdMOLLjrddshg4Q?si=0e373d9fdbea4938">
              <Badge>💨🌿🪨</Badge>
            </Anchor>
            <Anchor href="https://open.spotify.com/playlist/5EcmBXibP9qc8vkHwQSsNS?si=7ba4eaae273d4273">
              <Badge>🍇❤️🍷</Badge>
            </Anchor>
            <Anchor href="https://open.spotify.com/playlist/0uVfZA4Z5A9OxXzFFwX4Sq?si=32c3288144324d61">
              <Badge>⏳🪕🧉</Badge>
            </Anchor>
          </Group>
        </>
      </Layout>
    </>
  )
}

export default About
