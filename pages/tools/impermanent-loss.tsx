// Collatz sequence tool
import Layout from "../../components/layout"
import { Title, Text, NumberInput, Stack, Group } from "@mantine/core"
import Head from "next/head"
import { useEffect, useState } from "react"
import { CurrencyDollar } from "tabler-icons-react"

type ResultType = {
  totalQuantity: number
  quantityA: number
  quantityB: number
}
type PoolType = {
  spotA: number
  spotB: number
  futureA: number
  futureB: number
  quantity: number
}
const defaultTokenVals: PoolType = {
  spotA: 0.05,
  spotB: 0.05,
  futureA: 0.05,
  futureB: 0.05,
  quantity: 500,
}
function getResults(t: PoolType): ResultType {
  // how many Token A are there in this pool
  const quantityA = t.quantity / t.spotA
  // how many Token B are there in this pool
  const quantityB = t.quantity / t.spotB
  // constant product market
  const productConstant = quantityA * quantityB

  return {
    totalQuantity: t.quantity * 2,
    quantityA: t.quantity / t.spotA,
    quantityB: t.quantity / t.spotB,
  }
}
function calcImpermanentLoss(baseQty: number, tokenQty: number, futurePriceRatio: number): number {
  const productConstant = baseQty * tokenQty
  const hodlStrategy = tokenQty * futurePriceRatio + baseQty
  const lpStrategy =
    Math.sqrt(productConstant / futurePriceRatio) * futurePriceRatio + Math.sqrt(productConstant * futurePriceRatio)
  const impermanentLoss = ((hodlStrategy - lpStrategy) / hodlStrategy) * 100
  return impermanentLoss
}

const ImpermanentLoss = () => {
  const [tokenVals, setTokenVals] = useState<PoolType>(defaultTokenVals)
  const [ans, setAns] = useState<ResultType>(getResults(defaultTokenVals))

  useEffect(() => {
    setAns(getResults(tokenVals))
  }, [tokenVals])

  return (
    <>
      <Head>
        <title>Impermanent Loss Calculator</title>
        <meta name="description" content="An impermanent loss calculator." key="desc" />
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
            Initially
          </Title>
          <Text>
            Suppose you had {2 * tokenVals.quantity}$ with {tokenVals.quantity}$ worth of Token A, and{" "}
            {tokenVals.quantity}$ worth of Token B at the spot price; which means you had{" "}
            {tokenVals.quantity / tokenVals.spotA} Token A, and {tokenVals.quantity / tokenVals.spotB} Token B.
          </Text>

          <Title order={4} mt="md">
            Holder
          </Title>
          <Text>
            If you had kept on to these tokens, you would have{" "}
            {(tokenVals.quantity / tokenVals.spotA) * tokenVals.futureA}$ worth of Token A, and{" "}
            {(tokenVals.quantity / tokenVals.spotB) * tokenVals.futureB}$ worth of Token B, at a total of{" "}
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
