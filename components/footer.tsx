import { Anchor, Box, Group, Text, Tooltip } from "@mantine/core"
import { BrandGithub } from "tabler-icons-react"
import { FC, useState } from "react"
import Icon from "./icon"

const Footer: FC = () => {
  return (
    <Box component="footer" py="md" sx={{ textAlign: "center" }}>
      <Text>&copy; Erhan Tezcan {new Date().getFullYear()} &nbsp; </Text>
    </Box>
  )
}

export default Footer
