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
  Tooltip,
} from "@mantine/core"
import { motion } from "framer-motion"
import { Bulb, BulbOff, BrandLinkedin, BrandGithub } from "tabler-icons-react"
import Icon from "./icon"
import Navbar from "./navbar"

const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <Box component="header" p="lg">
      <Container>
        <Group>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Navbar isBurger={false} />
          </MediaQuery>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Navbar isBurger={true} />
          </MediaQuery>

          {/* empty space in between left and right*/}
          <Box sx={{ flexGrow: 1 }} />

          <motion.div whileHover={{ scale: 1.45 }}>
            <Tooltip label="LinkedIn">
              <Anchor href="https://www.linkedin.com/in/erhan-tezcan/">
                <Icon I={BrandLinkedin} />
              </Anchor>
            </Tooltip>
          </motion.div>

          <motion.div whileHover={{ scale: 1.45 }}>
            <Tooltip label="GitHub">
              <Anchor href="https://github.com/erhant">
                <Icon I={BrandGithub} />
              </Anchor>
            </Tooltip>
          </motion.div>

          <motion.div style={{ cursor: "pointer" }} onClick={() => toggleColorScheme()} whileHover={{ scale: 1.45 }}>
            <Tooltip label={colorScheme === "dark" ? "Lights on" : "Lights out"}>
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
            </Tooltip>
          </motion.div>
        </Group>
      </Container>
    </Box>
  )
}

export default Header
