import { ThemeIcon, BoxProps, MantineNumberSize } from "@mantine/core"
import { MouseEventHandler } from "react"
import { Icon as TablerIcon } from "tabler-icons-react"

type Props = {
  I: TablerIcon
  onClick?: MouseEventHandler<HTMLDivElement>
  size?: MantineNumberSize
}

const Icon = ({ I, onClick, size }: Props) => {
  return (
    <ThemeIcon
      onClick={onClick ? onClick : undefined}
      size={size ? size : "xl"}
      sx={(theme) => {
        return {
          backgroundColor: "transparent",
          color: theme.colors.icons[theme.colorScheme === "dark" ? 3 : 8],
        }
      }}
    >
      <I />
    </ThemeIcon>
  )
}

export default Icon
