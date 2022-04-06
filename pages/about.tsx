import Head from "next/head"
import Layout from "../components/layout"
import { Text, Title, Group, Anchor, Divider, Space, List, Badge, Tooltip } from "@mantine/core"
import { useState } from "react"
import FancyWord from "../components/fancy-word"
import DevStacks from "../components/dev-stacks"

const Index = () => {
  const [opened, setOpen] = useState(false)

  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Layout>
        <>
          <Title order={5}>
            <FancyWord word="Hello!" /> I am Erhan, a 96' born full-stack developer from Istanbul, Turkey 🇹🇷
          </Title>
          <Divider my="xl" label="Programming" labelPosition="center" />
          <DevStacks />
          <Text>
            My first ever-so-slightly-related programming experience was when I used the Doom 3 console to spawn zombies
            and props and such; around middle school I guess? After that, not much. My first actual program is my
            freshman year first homework, which was a CandyCrush-like game but with numbers instead of candies, in
            console, with <Anchor href="https://en.wikipedia.org/wiki/Pascal_(programming_language)">Pascal</Anchor>{" "}
            (yeah, indeed).
          </Text>
          <Space h="md" />
          <Text>
            Overall, I mostly work with backend-oriented Typescript, but later got into front-end too. As of 2022, I am
            hopping on to the Web3.0 train.{" "}
            <Tooltip label="We are all gonna make it 🚀" position="bottom">
              <FancyWord word="#WAGMI" />
            </Tooltip>
          </Text>

          <Divider my="xl" label="Publications" labelPosition="center" />
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
          <Divider my="xl" label="Mathematics" labelPosition="center" />
          <Text>
            I have great interest in mathematics; number theory and cryptography in particular. I will be writing stuff
            about them in this blog too! Check my projects for some math projects.
          </Text>
        </>
      </Layout>
    </>
  )
}

export default Index
