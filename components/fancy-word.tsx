import { Text, useMantineTheme } from "@mantine/core"
import { FC } from "react"

const FancyWord: FC<{
  word: string
}> = ({ word }) => {
  const theme = useMantineTheme()
  return (
    <Text
      component="span"
      variant="gradient"
      gradient={{ from: theme.colors.blues[3], to: theme.colors.oranges[3], deg: 90 }}
    >
      {word}
    </Text>
  )
}

export default FancyWord
