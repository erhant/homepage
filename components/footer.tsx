import { Anchor, Footer as _Footer, Group, Text, ThemeIcon } from "@mantine/core"
import { BrandGithub } from "tabler-icons-react"
import Icon from "./icon"

const Footer = () => {
  return (
    <_Footer height={0} py="md">
      <Group position="center">
        <Text>&copy; Erhan Tezcan {new Date().getFullYear()} &nbsp; </Text>
        <Anchor href="https://github.com/erhant/blog-static">
          <Icon I={BrandGithub} />
        </Anchor>
      </Group>
    </_Footer>
  )
}

export default Footer
