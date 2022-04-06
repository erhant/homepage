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
  Text,
  Anchor,
  Highlight,
  Container,
} from "@mantine/core"
import { useState } from "react"
import { Bulb, BulbOff, BrandLinkedin, BrandGithub, CurrencyEthereum } from "tabler-icons-react"
import Icon from "./icon"
import FancyWord from "./fancy-word"
type Props = {
  title?: string
}
const Header = ({ title }: Props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const [ethOpened, setEthOpened] = useState(false)

  return (
    <_Header height={60} px="lg" mt="lg">
      <Container>
        <Group>
          <Avatar src="/assets/me.JPG" alt="it is I, Erhan" radius="xl" />
          <Title order={2}>{title ? title : "Erhan's Homepage"}</Title>

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
            target={<Icon I={CurrencyEthereum} onClick={() => setEthOpened((o) => !o)} />}
            width={300}
            position="bottom"
          >
            <Box>
              <Text>
                My <Anchor href="https://unstoppabledomains.com/">Unstoppable Domain</Anchor>:
              </Text>
              <FancyWord word="erhantezcan.wallet" />
            </Box>
          </Popover>

          <Space w="xl" />
          <Switch
            sx={{ backgroundColor: "transparent" }}
            label={
              {
                light: (
                  <ThemeIcon
                    size="xl"
                    sx={(theme) => {
                      return {
                        backgroundColor: "transparent",
                        color: "goldenrod",
                      }
                    }}
                  >
                    <Bulb />
                  </ThemeIcon>
                ),
                dark: (
                  <ThemeIcon
                    size="xl"
                    sx={(theme) => {
                      return {
                        backgroundColor: "transparent",
                        color: "darkgray",
                      }
                    }}
                  >
                    <BulbOff />
                  </ThemeIcon>
                ),
              }[colorScheme]
            }
            onChange={() => toggleColorScheme()}
          />
        </Group>
      </Container>
    </_Header>
  )
}

export default Header
