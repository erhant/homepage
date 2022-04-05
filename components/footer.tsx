import { Anchor, Footer as _Footer, Group, Text, ThemeIcon } from "@mantine/core"
import { BrandGithub } from "tabler-icons-react"

const Footer = () => {
  return (
    <_Footer height={50} py="md">
      <Group position="center">
        <Text>&copy; Erhan Tezcan {new Date().getFullYear()} &nbsp; </Text>
        <Anchor href="https://github.com/erhant/blog-static">
          <ThemeIcon
            sx={(theme) => {
              return {
                backgroundColor: "transparent",
                color: theme.colors.icons[theme.colorScheme === "dark" ? 4 : 8],
              }
            }}
            size="xl"
          >
            <BrandGithub />
          </ThemeIcon>
        </Anchor>
      </Group>
    </_Footer>
  )
}

export default Footer
