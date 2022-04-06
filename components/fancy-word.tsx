import { Highlight } from "@mantine/core"
type Props = {
  word: string
}
const FancyWord = ({ word }: Props) => {
  return (
    <Highlight
      sx={{ display: "inline" }}
      highlight={[word]}
      highlightStyles={(theme) => ({
        backgroundImage: theme.fn.linearGradient(90, theme.colors.blues[3], theme.colors.oranges[3]),
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: "bolder",
      })}
    >
      {word}
    </Highlight>
  )
}

export default FancyWord
