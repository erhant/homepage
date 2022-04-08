import ToolType from "../types/tool"
import { Text } from "@mantine/core"
import { Tool as TablerTool, MathFunction, Calculator } from "tabler-icons-react"

const tools: ToolType[] = [
  {
    title: "Collatz Sequence",
    href: "/tools/collatz",
    description: (
      <Text>
        Collatz Sequence finder. It also shows the sequence length, number of peaks, ratio of max to initial, and a
        reduced sequence.
      </Text>
    ),
    icon: MathFunction,
  },
  {
    title: "Impermanent Loss Calculator",
    href: "/tools/impermanent-loss",
    description: <Text>Calculate the impermanent loss in a market with constant product automated market-maker.</Text>,
    icon: Calculator,
  },
]

export default tools
