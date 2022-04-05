import {
  Header as _Header,
  Group,
  Title,
  Avatar,
  AvatarsGroup,
  Switch,
  ThemeIcon,
  Box,
  useMantineColorScheme,
  Space,
} from "@mantine/core"
import { Bulb, BulbOff, BrandLinkedin, BrandGithub, CurrencyEthereum } from "tabler-icons-react"
type Props = {
  title?: string
}
const Header = ({ title }: Props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  return (
    <_Header height={60} px="lg" mt="lg">
      <Group>
        <Avatar src="/assets/me.JPG" alt="it is I, Erhan" radius="xl" />
        <Title order={2}>Erhan's Homepage</Title>

        {/* empty space in between left and right*/}

        <Box sx={{ flexGrow: 1 }} />

        <ThemeIcon
          size="xl"
          sx={(theme) => {
            return {
              backgroundColor: "transparent",
              color: theme.colors.icons[theme.colorScheme === "dark" ? 4 : 8],
            }
          }}
        >
          <BrandLinkedin />
        </ThemeIcon>
        <ThemeIcon
          size="xl"
          sx={(theme) => {
            return {
              backgroundColor: "transparent",
              color: theme.colors.icons[theme.colorScheme === "dark" ? 4 : 8],
            }
          }}
        >
          <BrandGithub />
        </ThemeIcon>
        <ThemeIcon
          size="xl"
          sx={(theme) => {
            return {
              backgroundColor: "transparent",
              color: theme.colors.icons[theme.colorScheme === "dark" ? 4 : 8],
            }
          }}
        >
          <CurrencyEthereum />
        </ThemeIcon>
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
    </_Header>
  )
}

export default Header
