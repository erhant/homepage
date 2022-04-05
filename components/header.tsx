import { Header as _Header, Group, Title, Avatar, Checkbox, ThemeIcon, Box } from "@mantine/core"
import { Sun } from "tabler-icons-react"
type Props = {
  title?: string
}
const Header = ({ title }: Props) => {
  return (
    <_Header height={60} px="lg" mt="lg">
      <Group>
        <Avatar src="/assets/me.JPG" alt="it is I, Erhan" radius="xl" />
        <Title order={2}>Erhan's Place</Title>

        {/* empty space in between left and right*/}
        <Box sx={{ flexGrow: 1 }} />

        <Checkbox label="Sunny" />
      </Group>
    </_Header>
  )
}

export default Header
