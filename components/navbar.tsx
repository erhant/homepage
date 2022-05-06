import Link from "next/link"
import { Navbar as _Navbar, Stack, Group, Anchor, Collapse, Paper, Text } from "@mantine/core"
import Icon from "./icon"
// icons for navbar
import { User, Notebook, Code, Home, Tool, Music, School, Icon as TablerIcon } from "tabler-icons-react"
import { FC } from "react"

const NavbarItemsList: [TablerIcon, string, string][] = [
  [Home, "/", "Home"],
  [User, "/about", "About"],
  [Code, "/projects", "Projects"],
  [Notebook, "/posts", "Blog"],
  [Tool, "/tools", "Tools"],
  [Music, "/music", "Music"],
]

const Navbar: FC = () => {
  return (
    <Stack align="stretch" px="xs" py="md">
      {NavbarItemsList.map((item, i) => {
        return (
          <_Navbar.Section key={i} component={Group}>
            <Icon I={item[0]} />
            <Link href={item[1]} passHref>
              <Anchor
                size="lg"
                sx={(theme) => {
                  return {
                    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.dark[9],
                    fontWeight: "bold",
                  }
                }}
              >
                {item[2]}
              </Anchor>
            </Link>
          </_Navbar.Section>
        )
      })}
      {/* CV download */}
      <_Navbar.Section component={Group}>
        <Icon I={School} />
        <Anchor
          href="/cv.pdf"
          target="_blank"
          size="lg"
          sx={(theme) => {
            return {
              color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.dark[9],
              fontWeight: "bold",
            }
          }}
        >
          CV
        </Anchor>
      </_Navbar.Section>
    </Stack>
  )
}

export default Navbar
