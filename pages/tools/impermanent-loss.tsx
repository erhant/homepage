// Collatz sequence tool
import Layout from "../../components/layout"
import { Title, Text, NumberInput, Stack, Group, Space, Center } from "@mantine/core"
import Head from "next/head"
import { useState } from "react"
import { CurrencyDollar } from "tabler-icons-react"

type TokenValsType = {
  spotA: number
  spotB: number
  futureA: number
  futureB: number
  quantity: number
}
const defaultTokenVals: TokenValsType = {
  spotA: 0.05,
  spotB: 0.05,
  futureA: 0.05,
  futureB: 0.05,
  quantity: 500,
}
const ImpermanentLoss = () => {
  const [tokenVals, setTokenVals] = useState<TokenValsType>(defaultTokenVals)

  return (
    <>
      <Head>
        <title>Impermanent Loss Calculator</title>
      </Head>

      <Layout>
        <>
          <Title order={1} my="md">
            Impermanent Loss Calculator
          </Title>
          <Text my="md">Impermanent loss description...</Text>
          <Stack>
            <Group>
              <NumberInput
                precision={4}
                min={0.0001}
                step={0.0005}
                label="Token A - Spot Price"
                placeholder={defaultTokenVals.spotA + ""}
                onChange={(val: number) => {
                  if (val) setTokenVals({ ...tokenVals, spotA: val })
                }}
                icon={<CurrencyDollar size={14} />}
              />
              <NumberInput
                precision={4}
                min={0.0001}
                step={0.0005}
                placeholder={defaultTokenVals.spotB + ""}
                label="Token B - Spot Price"
                onChange={(val: number) => {
                  if (val) setTokenVals({ ...tokenVals, spotB: val })
                }}
                icon={<CurrencyDollar size={14} />}
              />
            </Group>
            <Group>
              <NumberInput
                precision={4}
                min={0.0001}
                step={0.0005}
                placeholder={defaultTokenVals.futureA + ""}
                label="Token A - Future Price"
                onChange={(val: number) => {
                  if (val) setTokenVals({ ...tokenVals, futureA: val })
                }}
                icon={<CurrencyDollar size={14} />}
              />
              <NumberInput
                precision={4}
                min={0.0001}
                step={0.0005}
                placeholder={defaultTokenVals.futureB + ""}
                label="Token B - Future Price"
                onChange={(val: number) => {
                  if (val) setTokenVals({ ...tokenVals, futureB: val })
                }}
                icon={<CurrencyDollar size={14} />}
              />
            </Group>
            <Group>
              <NumberInput
                min={1}
                step={1}
                placeholder={defaultTokenVals.quantity + ""}
                label="Liquidity of one token"
                onChange={(val: number) => {
                  if (val) setTokenVals({ ...tokenVals, quantity: val })
                }}
                icon={<CurrencyDollar size={14} />}
              />
            </Group>
          </Stack>

          <Title order={4} mt="md">
            Holder
          </Title>
          <Text>
            Suppose you had {2 * tokenVals.quantity}$ with {tokenVals.quantity}$ worth of Token A, and{" "}
            {tokenVals.quantity}$ worth of Token B at the spot price; which means you had{" "}
            {tokenVals.quantity / tokenVals.spotA} Token A, and {tokenVals.quantity / tokenVals.spotB} Token B. If you
            had kept on to these tokens, you would have {(tokenVals.quantity / tokenVals.spotA) * tokenVals.futureA}$
            worth of Token A, and {(tokenVals.quantity / tokenVals.spotB) * tokenVals.futureB}$ worth of Token B, at a
            total of{" "}
            {(tokenVals.quantity / tokenVals.spotA) * tokenVals.futureA +
              (tokenVals.quantity / tokenVals.spotB) * tokenVals.futureB}
            $.
          </Text>
          <Title order={4} mt="md">
            Liquidity Provider
          </Title>
          <Text>
            Suppose you provided a liquidity of {2 * tokenVals.quantity}$ which is made of {tokenVals.quantity}$ worth
            of Token A, and {tokenVals.quantity}$ worth of Token B at the spot price.
          </Text>
        </>
      </Layout>
    </>
  )
}

export default ImpermanentLoss
