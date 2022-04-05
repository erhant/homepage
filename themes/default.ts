import { MantineThemeOverride } from "@mantine/core"

type TenColors = [string, string, string, string, string, string, string, string, string, string]

// Portal Orange: #EE7F1B
const portalOranges: TenColors = [
  "#ffecdc",
  "#fdcfb3",
  "#f7b486",
  "#f49d58",
  "#ef8729",
  "#d66110",
  "#a7400a",
  "#782606",
  "#491100",
  "#1e0001",
]
// Portal Blue: #D5DBEB
const portalBlues: TenColors = [
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
    blues: portalBlues,
    oranges: portalOranges,
    grays: grayscale,
    icons: portalBlues,
  },
  primaryColor: "blues",
}

export default DefaultMantineTheme
