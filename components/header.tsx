import {
  Header as _Header,
  Group,
  ThemeIcon,
  Box,
  useMantineColorScheme,
  Burger,
  Anchor,
  Container,
} from "@mantine/core"
import { Dispatch, SetStateAction } from "react"
import { Bulb, BulbOff, BrandLinkedin, BrandGithub } from "tabler-icons-react"
import Icon from "./icon"

type Props = {
  title?: string
  isNavbarOpen: boolean
  setIsNavbarOpen: Dispatch<SetStateAction<boolean>>
}
const Header = ({ title, isNavbarOpen, setIsNavbarOpen }: Props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <_Header height={60} px="lg" mt="lg">
      <Container>
        <Group>
          <Burger
            opened={isNavbarOpen}
            onClick={() => {
              setIsNavbarOpen(!isNavbarOpen)
            }}
          />

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
