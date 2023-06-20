import { Group, ThemeIcon, Box, useMantineColorScheme, Anchor, Container, MediaQuery, Tooltip } from "@mantine/core"
import { Bulb, BulbOff, BrandLinkedin, BrandGithub, CurrencyEthereum, BrandTwitter } from "tabler-icons-react"
import Icon from "./icon"
import Navbar from "./navbar"

const BULB_SIZE = 26
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

          <Tooltip label="LinkedIn">
            <Anchor href="https://www.linkedin.com/in/erhan-tezcan/">
              <Icon I={BrandLinkedin} />
            </Anchor>
          </Tooltip>

          <Tooltip label="Twitter">
            <Anchor href="https://www.twitter.com/0xerhant/">
              <Icon I={BrandTwitter} />
            </Anchor>
          </Tooltip>

          <Tooltip label="GitHub">
            <Anchor href="https://github.com/erhant">
              <Icon I={BrandGithub} />
            </Anchor>
          </Tooltip>

          <Box style={{ cursor: "pointer" }} onClick={() => toggleColorScheme()}>
            <Tooltip label={colorScheme === "dark" ? "Lights on" : "Lights out"}>
              {
                {
                  light: (
                    <ThemeIcon
                      size="lg"
                      sx={{
                        backgroundColor: "transparent",
                        color: "goldenrod",
                      }}
                    >
                      <Bulb size={BULB_SIZE} />
                    </ThemeIcon>
                  ),
                  dark: (
                    <ThemeIcon
                      size="lg"
                      sx={{
                        backgroundColor: "transparent",
                        color: "darkgray",
                      }}
                    >
                      <BulbOff size={BULB_SIZE} />
                    </ThemeIcon>
                  ),
                }[colorScheme]
              }
            </Tooltip>
          </Box>
        </Group>
      </Container>
    </Box>
  )
}

export default Header
