import { Paper, Title, useMantineTheme, Anchor, Text } from "@mantine/core"
import { motion } from "framer-motion"
import { FC } from "react"
import PlaylistType from "../types/playlist"

const PlaylistView: FC<{ playlist: PlaylistType }> = ({ playlist }) => {
  const theme = useMantineTheme()

  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Anchor href={playlist.href} target="_blank" underline={false}>
        <Paper
          shadow="lg"
          radius="xl"
          p="lg"
          withBorder
          sx={{ borderColor: theme.colors.icons[6], textDecoration: "none" }}
        >
          <Title order={5}>{playlist.name}</Title>
          <Text>{playlist.desc}</Text>
        </Paper>
      </Anchor>
    </motion.div>
  )
}

export default PlaylistView
