import { Anchor, Footer as _Footer, Group, Text, Tooltip } from "@mantine/core"
import { BrandGithub } from "tabler-icons-react"
import { FC, useState } from "react"
import Icon from "./icon"

const Footer: FC = () => {
  return (
    <_Footer height={0} py="md">
      <Group position="center">
        <Text>&copy; Erhan Tezcan {new Date().getFullYear()} &nbsp; </Text>
        <Tooltip label="Star on GitHub!">
          <Anchor href="https://github.com/erhant/homepage">
            <Icon I={BrandGithub} />
          </Anchor>
        </Tooltip>
      </Group>
    </_Footer>
  )
}

export default Footer
