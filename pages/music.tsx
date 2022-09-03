import { Group, Box, Title, LoadingOverlay } from "@mantine/core"
import Layout from "../components/layout"
import Head from "next/head"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import getRandomTrackID from "../content/music"
import PlaylistView from "../components/playlist-view"
import { specialLists, drivingLists, genericLists } from "../content/playlists"

const lists = specialLists
  .concat(drivingLists)
  .concat(genericLists)
  .sort((a, b) => Math.random() - 0.5) // shuffle

const Music: NextPage = () => {
  const [loading, setLoading] = useState(true)
  const [songID, setSongID] = useState<string>()

  // choose a random song on mount
  useEffect(() => {
    setSongID(getRandomTrackID())
  }, [])

  return (
    <>
      <Head>
        <title>Music</title>
        <meta name="description" content="Things to listen before you no longer can." key="desc" />
      </Head>
      <Layout>
        <>
          <Title order={1} mb="md">
            Music
          </Title>

          <Title order={2} my="xs">
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

          <Title order={2} my="xs">
            Playlists
          </Title>
          <Group my="sm" position="center" grow>
            {lists.map((l, i) => (
              <PlaylistView key={i} playlist={l} />
            ))}
          </Group>
        </>
      </Layout>
    </>
  )
}

export default Music
