// Collatz sequence tool
import Layout from "../../components/layout"
import { Title, Text, NumberInput, Input, Button, Group } from "@mantine/core"
import Head from "next/head"
import { useState } from "react"

function collatzSequence(n: number): number[] {
  const ans: number[] = []
  while (n > 1) {
    ans.push(n)
    if ((n & 1) === 0) {
      n >>= 1
    } else {
      n = 3 * n + 1
    }
  }
  ans.push(1)
  return ans
}

const defaultNum = 7
const Collatz = () => {
  const [num, setNum] = useState<number>(defaultNum)
  const [seq, setSeq] = useState<number[]>(collatzSequence(defaultNum))

  return (
    <>
      <Head>
        <title>Collatz Sequence</title>
      </Head>

      <Layout>
        <>
          <Title order={1} my="md">
            Collatz Sequence Finder
          </Title>
          <Text my="md">
            The Collatz Sequence of a number is the set of numbers that appear until the iterative process reaches one.
          </Text>
          <Group>
            <NumberInput
              min={1}
              step={1}
              placeholder={"Number"}
              onChange={(val: number) => {
                // can be undefined if empty, so make this check
                if (val) setNum(val)
              }}
            />
            <Button variant="outline" onClick={() => setSeq(collatzSequence(num))}>
              Go
            </Button>
          </Group>

          <Title order={3} my="md">
            Sequence
          </Title>
          <Text>{seq.join(" → ")}</Text>
          <Text color="dimmed">{seq.length - 1} steps</Text>

          <Title order={3} my="md">
            Reduced Sequence
          </Title>
          <Text>{seq.filter((n) => n & 1).join(" → ")}</Text>
          <Text color="dimmed">{seq.filter((n) => n & 1).length - 1} steps, even numbers omitted.</Text>
        </>
      </Layout>
    </>
  )
}

export default Collatz
