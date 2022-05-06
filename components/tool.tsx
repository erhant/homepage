import { Anchor, Box, Group, Stack, Tooltip, Text } from "@mantine/core"
import { FC } from "react"
import ToolType from "../types/tool"
import Icon from "./icon"
import { motion, useAnimation } from "framer-motion"

const Tool: FC<{
  t: ToolType
}> = ({ t }) => {
  const controls = useAnimation()

  return (
    <motion.div
      initial={{ x: 0 }}
      whileHover={{ x: 5 }}
      onTap={() => controls.start({ scale: 1.1 })}
      animate={controls}
    >
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
    </motion.div>
  )
}

export default Tool
