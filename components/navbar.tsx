import Head from "next/head"
import Link from "next/link"
import { AppShell, Navbar as _Navbar, Stack, ThemeIcon, Group, Anchor, Container } from "@mantine/core"
import { useMantineTheme } from "@mantine/core"
import { ReactChild, ReactElement } from "react"
// icons for navbar
import { User, Notebook, Code, Home } from "tabler-icons-react"
const NavbarItemsList: [ReactElement, string, string][] = [
  [<Home />, "/", "Home"],
  [<User />, "/about", "About"],
  [<Notebook />, "/posts", "Posts"],
  [<Code />, "/projects", "Projects"],
]

const Navbar = () => {
  const theme = useMantineTheme()

  return (
    <_Navbar width={{ base: 200 }} ml="lg">
      <Stack align="stretch" px="xs" py="md">
        {NavbarItemsList.map((item, i) => {
          return (
            <_Navbar.Section key={i} component={Group}>
              <ThemeIcon
                sx={{
                  backgroundColor: "transparent",
                }}
              >
                {item[0]}
              </ThemeIcon>
              <Link href={item[1]} passHref>
                <Anchor component="a" size="lg">
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
