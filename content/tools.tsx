import ToolType from "../types/tool"
import { Text } from "@mantine/core"
import { Tool as TablerTool, MathFunction, Calculator } from "tabler-icons-react"

const tools: ToolType[] = [
  {
    title: "Collatz Sequence",
    href: "/tools/collatz",
    description: <Text>Find the Collatz sequence of any positive integer.</Text>,
    icon: MathFunction,
  },
  {
    title: "Impermanent Loss Calculator",
    href: "/tools/impermanent-loss",
    description: <Text>Calculate the impermanent loss in a market with constant product automated market maker.</Text>,
    icon: Calculator,
    wip: true,
  },
]

export default tools
