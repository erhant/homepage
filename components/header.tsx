import {
  Group,
  ThemeIcon,
  Box,
  useMantineColorScheme,
  Popover,
  Burger,
  Anchor,
  Container,
  MediaQuery,
} from "@mantine/core"
import { Bulb, BulbOff, BrandLinkedin, BrandGithub } from "tabler-icons-react"
import Icon from "./icon"
import Navbar from "./navbar"

const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <Box component="header" p="lg">
      <Container size="lg">
        <Group>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Navbar isBurger={false} />
          </MediaQuery>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Navbar isBurger={true} />
          </MediaQuery>

          {/* empty space in between left and right*/}
          <Box sx={{ flexGrow: 1 }} />

          <Anchor href="https://www.linkedin.com/in/erhan-tezcan/">
            <Icon I={BrandLinkedin} />
          </Anchor>

          <Anchor href="https://github.com/erhant">
            <Icon I={BrandGithub} />
          </Anchor>

          <Box onClick={() => toggleColorScheme()} sx={{ cursor: "pointer" }}>
            {
              {
                light: (
                  <ThemeIcon
                    size="xl"
                    sx={{
                      backgroundColor: "transparent",
                      color: "goldenrod",
                    }}
                  >
                    <Bulb />
                  </ThemeIcon>
                ),
                dark: (
                  <ThemeIcon
                    size="xl"
                    sx={{
                      backgroundColor: "transparent",
                      color: "darkgray",
                    }}
                  >
                    <BulbOff />
                  </ThemeIcon>
                ),
              }[colorScheme]
            }
          </Box>
        </Group>
      </Container>
    </Box>
  )
}

export default Header
