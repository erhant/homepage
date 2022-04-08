import { Anchor, Box, Group, Stack } from "@mantine/core"
import ToolType from "../types/tool"
import Icon from "./icon"

type Props = {
  t: ToolType
}
const Tool = ({ t }: Props) => {
  return (
    <Stack px="sm">
      <Group position="left">
        <Icon I={t.icon} />
        <Anchor href={t.href} sx={{ fontSize: "1.5em" }}>
          {t.title}
        </Anchor>
      </Group>
      <Box sx={{ marginTop: "-1em" }}>{t.description}</Box>
    </Stack>
  )
}

export default Tool
