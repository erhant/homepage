import { Anchor, Box, Group, Stack, Tooltip, Text } from "@mantine/core"
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
        {t.wip ? (
          <Tooltip label="Under construction!" position="bottom">
            <Text color="dimmed" sx={{ fontSize: "1.5em" }}>
              {t.title}
            </Text>
          </Tooltip>
        ) : (
          <Anchor href={t.href} sx={{ fontSize: "1.5em" }}>
            {t.title}
          </Anchor>
        )}
      </Group>
      <Box sx={{ marginTop: "-1em" }}>{t.description}</Box>
    </Stack>
  )
}

export default Tool
