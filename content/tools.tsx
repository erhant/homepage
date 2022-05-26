import ToolType from "../types/tool"
import { Text } from "@mantine/core"
import { MathFunction, Music, CurrencyEthereum } from "tabler-icons-react"

const tools: ToolType[] = [
  {
    title: "Impermanent Loss Calculator",
    href: "/tools/impermanent-loss",
    description: <Text>Calculate the impermanent loss in a constant product automated market maker.</Text>,
    icon: CurrencyEthereum,
  },
  {
    title: "Collatz Sequence",
    href: "/tools/collatz",
    description: <Text>Find the Collatz sequence of any positive integer.</Text>,
    icon: MathFunction,
  },
  {
    title: "Music Formula Reader",
    href: "/tools/music-formula-reader",
    description: <Text>Find the music notes in chords and scales via their formula.</Text>,
    icon: Music,
  },
  {
    title: "Random Music Notes",
    href: "/tools/random-music-notes",
    description: <Text>Practice your instrument with randomly generated music notes.</Text>,
    icon: Music,
  },
]

export default tools
