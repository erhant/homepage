import { List } from "@mantine/core"
import { FC } from "react"

// TODO: add link
const Publication: FC = ({ children }) => {
  return (
    <List.Item mx="sm" my="md">
      {children}
    </List.Item>
  )
}

export default Publication
