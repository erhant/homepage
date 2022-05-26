import { Anchor, Badge, Text, Group, Box, Title, LoadingOverlay } from "@mantine/core"
import Layout from "../components/layout"
import Head from "next/head"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import getRandomTrackID from "../content/music"
import PlaylistType from "../types/playlist"
import PlaylistView from "../components/playlist-view"
import { specialLists, drivingLists, genericLists } from "../content/playlists"

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
            Driving Playlists
          </Title>
          <Text>I have genre-based playlists for going out in traffic too. Istanbul made me do it.</Text>
          <Group my="sm" position="center" grow>
            {drivingLists.map((l, i) => (
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
