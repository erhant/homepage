import ToolType from "../types/tool"
import { Text } from "@mantine/core"
import { MathFunction, Music, CurrencyEthereum } from "tabler-icons-react"

const tools: ToolType[] = [
  {
    title: "Impermanent Loss",
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
    title: "Musical Tools",
    href: "https://musical-tools-for-everyone.vercel.app/",
    description: <Text>Practice your instrument and improve your music theory with these awesome free tools!</Text>,
    icon: Music,
  },
]

export default tools
