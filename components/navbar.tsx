import Link from "next/link"
import { Navbar as _Navbar, Stack, Group, Anchor, Collapse, Paper } from "@mantine/core"
import Icon from "./icon"
// icons for navbar
import { User, Notebook, Code, Home, Tool, Icon as TablerIcon } from "tabler-icons-react"

const NavbarItemsList: [TablerIcon, string, string][] = [
  [Home, "/", "Home"],
  [User, "/about", "About"],
  [Code, "/projects", "Projects"],
  [Notebook, "/posts", "Posts"],
  [Tool, "/tools", "Tools"],
]

type Props = {
  isNavbarOpen: boolean
}
const Navbar = ({ isNavbarOpen }: Props) => {
  return (
    <Paper
      shadow="xs"
      sx={{ position: "absolute", marginTop: "1.5em", marginLeft: "1.5em", zIndex: "5", minWidth: "10em" }}
    >
      <Collapse in={isNavbarOpen} transitionTimingFunction="ease-in">
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
        </Stack>
      </Collapse>
    </Paper>
  )
}

export default Navbar
