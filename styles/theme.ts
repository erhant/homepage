import { MantineThemeOverride } from "@mantine/core"

type TenColors = [string, string, string, string, string, string, string, string, string, string]
// Portal Orange: #EE7F1B
// Portal Blue: #D5DBEB
const portalOranges: TenColors = [
  "#FBE4CF",
  "#F6BC88",
  "#F29B4C",
  "#EE7F1B",
  "#C5650F",
  "#9E510C",
  "#7E4109",
  "#653408",
  "#512906",
  "#412105",
]
const portalBlues: TenColors = [
  "#F9FBFF",
  "#EAEEFB",
  "#DEE4F4",
  "#D5DBEB",
  "#C4CEEA",
  "#AFC0EE",
  "#93AFF9",
  "#709BFF",
  "#548AFF",
  "#437EFF",
]
const MantineTheme: MantineThemeOverride = {
  fontFamily: "Avenir, sans-serif",
  colors: {
    brand: portalOranges,
  },
  primaryColor: "brand",
  colorScheme: "light",
}

export default MantineTheme
