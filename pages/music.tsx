import { Anchor, Badge, Text, Group, Title } from "@mantine/core"
import Layout from "../components/layout"
import Head from "next/head"
import { NextPage } from "next"

const Music: NextPage = () => {
  return (
    <>
      <Head>
        <title>Music</title>
        <meta name="description" content="Music recommendations." key="desc" />
      </Head>
      <Layout>
        <>
          <Title order={1} mb="md">
            Music <i>(work in progress)</i>
          </Title>
          <Text>I love making playlists, preferably with some mood &amp; feeling behind it.</Text>
          <Group my="sm" position="center">
            <Anchor href="https://open.spotify.com/playlist/4GEXl9DjrgtOB020KpAUCm?si=fbeb307f988c419c">
              <Badge>🥁🎹🎧</Badge>
            </Anchor>
            <Anchor href="https://open.spotify.com/playlist/4QJzN1UIdMOLLjrddshg4Q?si=0e373d9fdbea4938">
              <Badge>💨🌿🍄</Badge>
            </Anchor>
            <Anchor href="https://open.spotify.com/playlist/5EcmBXibP9qc8vkHwQSsNS?si=7ba4eaae273d4273">
              <Badge>🍇❤️🍷</Badge>
            </Anchor>
            <Anchor href="https://open.spotify.com/playlist/0uVfZA4Z5A9OxXzFFwX4Sq?si=32c3288144324d61">
              <Badge>⏳🪕🧉</Badge>
            </Anchor>
          </Group>
          <Text>Other than that, there are some generic playlists with quite a lot of tracks in them.</Text>
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
            <Anchor href="https://open.spotify.com/playlist/255RtC1aHij99LJLxZ5F72?si=5e5965dd9d7f4eba">
              <Badge>Metal</Badge>
            </Anchor>
            <Anchor href="https://open.spotify.com/playlist/2gmCqVB1aSzqHCoDkDyNbG?si=f964970d6843497d">
              <Badge>Turkish</Badge>
            </Anchor>
          </Group>
        </>
      </Layout>
    </>
  )
}

export default Music
