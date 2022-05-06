import {
  Header as _Header,
  Group,
  ThemeIcon,
  Box,
  useMantineColorScheme,
  Popover,
  Burger,
  Anchor,
  Container,
} from "@mantine/core"
import { useState } from "react"
import { Bulb, BulbOff, BrandLinkedin, BrandGithub } from "tabler-icons-react"
import Icon from "./icon"
import Navbar from "./navbar"

const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const [opened, setOpened] = useState(false)

  return (
    <_Header height={60} px="lg" mt="lg">
      <Container>
        <Group>
          <Popover
            opened={opened}
            onClose={() => setOpened(false)}
            target={<Burger opened={opened} onClick={() => setOpened((o) => !o)} />}
            width={200}
            position="bottom"
            withArrow
            withCloseButton={false}
          >
            <Navbar />
          </Popover>

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
    </_Header>
  )
}

export default Header
