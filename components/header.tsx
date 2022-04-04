import { Header as _Header } from "@mantine/core"

type Props = {
  title?: string
}
const Header = () => {
  return (
    <_Header height={60} p="xs">
      <p>This is my header.</p>
    </_Header>
  )
}

export default Header
