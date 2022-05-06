import { Anchor, Badge, Text, Group, Box, Title, LoadingOverlay } from "@mantine/core"
import Layout from "../components/layout"
import Head from "next/head"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import getRandomTrackID from "../content/music"
import PlaylistType from "../types/playlist"
import PlaylistView from "../components/playlist-view"

const specialLists: PlaylistType[] = [
  {
    name: "🥁🎹🎧",
    href: "https://open.spotify.com/playlist/4GEXl9DjrgtOB020KpAUCm?si=fbeb307f988c419c",
    desc: "Some jazz pieces with oomph in it.",
  },
  {
    name: "💨🌿🍄",
    href: "https://open.spotify.com/playlist/4QJzN1UIdMOLLjrddshg4Q?si=0e373d9fdbea4938",
    desc: "Heavy songs to accompany the herb of mother nature.",
  },
  {
    name: "🍇❤️🍷",
    href: "https://open.spotify.com/playlist/5EcmBXibP9qc8vkHwQSsNS?si=7ba4eaae273d4273",
    desc: "A playlist for when there is fire and wine.",
  },
  {
    name: "⏳🪕🧉",
    href: "https://open.spotify.com/playlist/0uVfZA4Z5A9OxXzFFwX4Sq?si=32c3288144324d61",
    desc: "Tunes and blues from the dunes.",
  },
  {
    name: "Surrealist's Companion",
    href: "https://open.spotify.com/playlist/5gj004PS8BUlrFAAZ4MBi6?si=8be762b130a74c76",
    desc: "A collection of 100 songs to guide you in your surrealist experience, such as in a museum.",
  },
]

const genericLists: PlaylistType[] = [
  {
    name: "Rock & Blues",
    href: "https://open.spotify.com/playlist/1jOnw1TiUqDAxQd5SRPrLb?si=421fab6f5a294559",
    desc: "A collection of over 1700 songs, ranging all kinds of rock and blues sub-genres.",
  },
  {
    name: "Jazz & Funk & Soul",
    href: "https://open.spotify.com/playlist/29oizr6rN6Ct38A6nWxjTK?si=49914f3a98f84e37",
    desc: "Handpicked songs of jazz, from the funks to the fusions.",
  },
  {
    name: "Classical",
    href: "https://open.spotify.com/playlist/3v2LX32gUOGgqsGnBQbfri?si=83a171ee4e54420a",
    desc: "A list to cool the mind the way our precedents used to.",
  },
  {
    name: "Rap & Trap",
    href: "https://open.spotify.com/playlist/4U6slifCwWBnRPvhmeherf?si=bea017e4d90b4035",
    desc: "Use with speakers and sub-woofers.",
  },
  {
    name: "Metal",
    href: "https://open.spotify.com/playlist/255RtC1aHij99LJLxZ5F72?si=5e5965dd9d7f4eba",
    desc: "Stuck in traffic?",
  },
  {
    name: "Turkish",
    href: "https://open.spotify.com/playlist/2gmCqVB1aSzqHCoDkDyNbG?si=f964970d6843497d",
    desc: "From my home.",
  },
]
const Music: NextPage = () => {
  const [loading, setLoading] = useState(true)
  const [songID, setSongID] = useState<string>()

  useEffect(() => {
    setSongID(getRandomTrackID())
  }, [])
  return (
    <>
      <Head>
        <title>Music</title>
        <meta name="description" content="Music recommendations." key="desc" />
      </Head>
      <Layout>
        <>
          <Title order={1} mb="md">
            Music
          </Title>

          <Title order={3} my="xs">
            Song of the day
          </Title>
          <Box m="xl" sx={{ position: "relative" }}>
            <LoadingOverlay visible={loading} />
            {songID && (
              <iframe
                style={{ borderRadius: "12px" }}
                src={"https://open.spotify.com/embed/track/" + songID + "?utm_source=generator"}
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                onLoad={() => setLoading(false)}
              ></iframe>
            )}
          </Box>

          <Title order={3} my="xs">
            Special Playlists
          </Title>
          <Text>I love making playlists, preferably with some mood &amp; feeling behind it.</Text>
          <Group my="sm" position="center" grow>
            {specialLists.map((l, i) => (
              <PlaylistView key={i} playlist={l} />
            ))}
          </Group>

          <Title order={3} my="xs">
            General Playlists
          </Title>
          <Text>Other than that, there are some generic playlists with quite a lot of tracks in them.</Text>
          <Group my="sm" position="center" grow>
            {genericLists.map((l, i) => (
              <PlaylistView key={i} playlist={l} />
            ))}
          </Group>
        </>
      </Layout>
    </>
  )
}

export default Music
