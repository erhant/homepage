import { MantineThemeOverride } from "@mantine/core"

type TenColors = [string, string, string, string, string, string, string, string, string, string]

const myOranges: TenColors = [
  "#fff0de",
  "#f7dcb6",
  "#f0ca8d",
  "#e8b961",
  "#e2ab37",
  "#c8971d",
  "#9c6d15",
  "#6f470c",
  "#442503",
  "#190a00",
]

const myBlues: TenColors = [
  "#eceffc",
  "#cbd3e6",
  "#aab2d3",
  "#888fc1",
  "#676bb0",
  "#4e4d96",
  "#413c76",
  "#302a54",
  "#1f1934",
  "#080515",
]
const grayscale: TenColors = [
  "#f2f2f2",
  "#d9d9d9",
  "#bfbfbf",
  "#a6a6a6",
  "#8c8c8c",
  "#737373",
  "#595959",
  "#404040",
  "#262626",
  "#0d0d0d",
]
const DefaultMantineTheme: MantineThemeOverride = {
  fontFamily: "Avenir, Verdana, sans-serif",
  colors: {
    blues: myBlues,
    oranges: myOranges,
    grays: grayscale,
    icons: myBlues,
  },
}

export default DefaultMantineTheme
