import { ThemeIcon, MantineNumberSize, Sx } from "@mantine/core"
import { MouseEventHandler } from "react"
import { Icon as TablerIcon } from "tabler-icons-react"

type Props = {
  I: TablerIcon
  onClick?: MouseEventHandler<HTMLDivElement>
  size?: MantineNumberSize
  sx?: Sx
}

const Icon = ({ I, onClick, size, sx }: Props) => {
  return (
    <ThemeIcon
      onClick={onClick ? onClick : undefined}
      size={size ? size : "xl"}
      sx={(theme) => {
        return {
          backgroundColor: "transparent",
          color: theme.colors.icons[theme.colorScheme === "dark" ? 3 : 8],
          ...sx,
        }
      }}
    >
      <I />
    </ThemeIcon>
  )
}

export default Icon
