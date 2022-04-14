import ToolType from "../types/tool"
import { Text } from "@mantine/core"
import { MathFunction, Calculator, CurrencyEthereum } from "tabler-icons-react"

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
]

export default tools
