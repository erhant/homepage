import Head from "next/head"
import Link from "next/link"
import { AppShell, Navbar as _Navbar, Stack, ThemeIcon, Group, Anchor, Container, Text } from "@mantine/core"
import { useMantineTheme } from "@mantine/core"
import { ReactChild, ReactElement } from "react"
import Icon from "./icon"
// icons for navbar
import { User, Notebook, Code, Home, Icon as TablerIcon } from "tabler-icons-react"
const NavbarItemsList: [TablerIcon, string, string][] = [
  [Home, "/", "Home"],
  [User, "/about", "About"],
  [Notebook, "/posts", "Posts"],
  [Code, "/projects", "Projects"],
]

const Navbar = () => {
  return (
    <_Navbar width={{ base: 200 }} ml="lg">
      <Stack align="stretch" px="xs" py="md">
        {NavbarItemsList.map((item, i) => {
          return (
            <_Navbar.Section key={i} component={Group}>
              <Icon I={item[0]} />
              <Link href={item[1]} passHref>
                <Anchor
                  component="a"
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
      </Stack>
    </_Navbar>
  )
}

export default Navbar
