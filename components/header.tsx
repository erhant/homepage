import {
  Header as _Header,
  Group,
  Title,
  Avatar,
  Switch,
  ThemeIcon,
  Box,
  useMantineColorScheme,
  Space,
  Popover,
  Burger,
  Text,
  Anchor,
  Container,
} from "@mantine/core"
import { Dispatch, SetStateAction, useState } from "react"
import { Bulb, BulbOff, BrandLinkedin, BrandGithub, CurrencyEthereum } from "tabler-icons-react"
import Icon from "./icon"
import FancyWord from "./fancy-word"

type Props = {
  title?: string
  isNavbarOpen: boolean
  setIsNavbarOpen: Dispatch<SetStateAction<boolean>>
}
const Header = ({ title, isNavbarOpen, setIsNavbarOpen }: Props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const [ethOpened, setEthOpened] = useState(false)

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

          <Popover
            opened={ethOpened}
            onClose={() => setEthOpened(false)}
            target={<Icon I={CurrencyEthereum} onClick={() => setEthOpened((o) => !o)} sx={{ cursor: "pointer" }} />}
            width={300}
            position="bottom"
          >
            <Box>
              <Text>
                My <Anchor href="https://unstoppabledomains.com/">Unstoppable Domain</Anchor>:
              </Text>
              <Anchor href="https://ud.me/erhantezcan.wallet">
                <FancyWord word="erhantezcan.wallet" />
              </Anchor>
            </Box>
          </Popover>

          <Space w="xl" />
          <Switch
            label={
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
            onChange={() => toggleColorScheme()}
            styles={{
              label: {
                marginLeft: "-1em",
              },
            }}
          />
        </Group>
      </Container>
    </_Header>
  )
}

export default Header
