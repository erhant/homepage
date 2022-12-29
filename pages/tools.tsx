import Layout from "../components/layout"
import { Stack, Title } from "@mantine/core"
import Head from "next/head"
import Tool from "../components/tool"
import type ToolType from "../types/tool"
import { Text } from "@mantine/core"
import { MathFunction, Music, CurrencyEthereum } from "tabler-icons-react"

const tools: ToolType[] = [
  {
    title: "Impermanent Loss",
    href: "/tools/impermanent-loss",
    description: <Text>Calculate your impermanent loss in a constant product automated market maker.</Text>,
    icon: CurrencyEthereum,
  },
  {
    title: "Collatz Sequence",
    href: "/tools/collatz",
    description: <Text>Find the Collatz sequence of any positive integer.</Text>,
    icon: MathFunction,
  },
  {
    title: "Ethereum Tools",
    href: "/tools/ethereum",
    description: <Text>A handful of Ethereum utilities such as unit conversion and hashing.</Text>,
    icon: CurrencyEthereum,
  },
]

const Tools = () => {
  return (
    <>
      <Head>
        <title>Tools</title>
        <meta name="description" content="All kinds of tools!" key="desc" />
      </Head>

      <Layout>
        <>
          <Title order={1} mb="md">
            Tools
          </Title>
          <Stack>
            {tools.map((t, i) => {
              return <Tool t={t} key={i} />
            })}
          </Stack>
        </>
      </Layout>
    </>
  )
}

export default Tools
