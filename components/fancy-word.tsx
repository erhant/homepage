import { Text, useMantineTheme } from "@mantine/core"
type Props = {
  word: string
}
const FancyWord = ({ word }: Props) => {
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
