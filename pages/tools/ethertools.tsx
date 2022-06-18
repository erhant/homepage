// Collatz sequence tool
import Layout from "../../components/layout"
import { Title, Text, NumberInput, Anchor, Button, Group, TextInput, Table, Input } from "@mantine/core"
import Head from "next/head"
import { useEffect, useState } from "react"
import keccak256 from "keccak256" // @todo use "@ethersproject/keccak256"
import { BigNumber, formatFixed, parseFixed } from "@ethersproject/bignumber"

const etherUnitNames: [string, string, string, string, string, string, string] = [
  "wei",
  "kilowei (babbage)",
  "megawei (lovelace)",
  "gigawei (shannon)",
  "microether (szabo)",
  "milliether (finney)",
  "ether",
]
const Ethertools = () => {
  const [weiValue, setWeiValue] = useState<BigNumber>(BigNumber.from("1000000000000000000"))
  const [etherValues, setEtherValues] = useState<[string, string, string, string, string, string, string]>([
    formatFixed("1000000000000000000", 0),
    formatFixed("1000000000000000000", 3),
    formatFixed("1000000000000000000", 6),
    formatFixed("1000000000000000000", 9),
    formatFixed("1000000000000000000", 12),
    formatFixed("1000000000000000000", 15),
    formatFixed("1000000000000000000", 18),
  ])
  const [hashText, setHashText] = useState("")
  const [hashValue, setHashValue] = useState("")
  const [funcText, setFuncText] = useState("")
  const [funcTextError, setFuncTextError] = useState(false)
  const [funcTextSignature, setFuncTextSignature] = useState("")
  const [funcByteSignature, setFuncByteSignature] = useState("")

  function encodeFunction(funcStr: string): string {
    // regex assures this to work
    let sanFuncStr = funcStr
      .replace(/\s*\(\s*/g, "(") // sanitize parenthesis
      .replace(/\s*\)\s*/g, ")") // sanitize parenthesis
      .replace(/\s*,\s*/g, ",") // sanitize comma

    // regex to check sanitized expression
    if (!/\s*\w+\((?:[\w\[\]]+(?:\s+\w+)*,?)*\)\.*/gm.test(sanFuncStr)) {
      return ""
    }
    let startIdx = sanFuncStr.indexOf("(")
    let endIdx = sanFuncStr.indexOf(")")

    let idenIdx = sanFuncStr.indexOf(" ")
    if (idenIdx > startIdx) idenIdx = -1
    const identifier = sanFuncStr.slice(idenIdx + 1, startIdx)
    const params = sanFuncStr
      .slice(startIdx + 1, endIdx)
      .split(",")
      .map((s) => s.split(" ")[0])

    return `${identifier}(${params.join(",")})`
  }

  useEffect(() => {
    setEtherValues([
      formatFixed(weiValue, 0),
      formatFixed(weiValue, 3),
      formatFixed(weiValue, 6),
      formatFixed(weiValue, 9),
      formatFixed(weiValue, 12),
      formatFixed(weiValue, 15),
      formatFixed(weiValue, 18),
    ])
  }, [weiValue])

  return (
    <>
      <Head>
        <title>Ethertools</title>
        <meta name="description" content="Ether unit converter and hashing." key="desc" />
      </Head>

      <Layout>
        <>
          <Title>Ethertools</Title>
          <Text>
            This toolset has 3 tools:
            <ul>
              <li>
                <b>Ether-Unit Converter</b>. EVM does integer arithmetic only, where everything happens in Wei (18
                decimals). To use other units, you might find a converter useful. See{" "}
                <Anchor href="https://ethdocs.org/en/latest/ether.html">ethdocs</Anchor> for more information on units.
              </li>
              <li>
                <b>Hashing</b> Find the Keccak256 (SHA3) hash of any string.
              </li>
              <li>
                <b>Function Signature Encoder</b>. EVM uses the first 4 bytes of the canonical forms of functions to
                understand which function is being called. Being aware of the signature might be useful in attacking and
                defending a smart contract. See <Anchor href="https://www.4byte.directory/">4byte.directory</Anchor> for
                a database of these signatures.
              </li>
            </ul>
          </Text>
          <Title order={2} my="md">
            Ether-Unit Converter
          </Title>

          <Table fontSize="md">
            <thead>
              <tr>
                <th>
                  <b>Unit Name</b>
                </th>
                <th>Value</th>
                <th>
                  <b>Wei</b>
                </th>
              </tr>
            </thead>
            <tbody>
              {etherValues.map((v, i) => (
                <tr key={i}>
                  <td>
                    <strong>{etherUnitNames[i]}</strong>
                  </td>
                  <td>
                    10<sup>{i * 3}</sup> wei
                  </td>
                  <td>
                    <Input
                      value={v.toString()} //.replace(/\.0$/, "")}
                      onChange={(e: any) => {
                        try {
                          if (e.currentTarget.value) setWeiValue(parseFixed(e.currentTarget.value, i * 3))
                          else setWeiValue(BigNumber.from(0))
                        } catch (e) {}
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Title order={2} my="md">
            Hashing
          </Title>
          <TextInput
            value={hashText}
            onChange={(event) => setHashText(event.currentTarget.value)}
            label="Keccak256 (i.e. SHA3)"
            placeholder="text here"
            rightSection={
              <Button
                onClick={() => {
                  setHashValue("0x" + keccak256(hashText).toString("hex"))
                }}
              >
                Hash
              </Button>
            }
          />
          <Text my="md" sx={{ overflowY: "auto" }}>
            <b>Digest:</b>
            {" 0x" + hashValue}
          </Text>

          <Title order={2} my="md">
            Function Signature Encoder
          </Title>
          <TextInput
            value={funcText}
            onChange={(event) => setFuncText(event.currentTarget.value)}
            label="Function Signature"
            error={funcTextError}
            placeholder="function transfer(address _from, uint256 _amount) public;"
            rightSection={
              <Button
                onClick={() => {
                  // regex check
                  let s = encodeFunction(funcText)
                  if (s == "") {
                    setFuncTextError(true)
                  } else {
                    if (funcTextError) setFuncTextError(false)
                    setFuncTextSignature(s)
                    setFuncByteSignature(keccak256(s).toString("hex").slice(0, 8))
                  }
                }}
              >
                Encode
              </Button>
            }
          />
          <Text my="md">
            <b>Canonical Form:</b>
            {" " + funcTextSignature}
          </Text>
          <Text my="md">
            <b>Bytes Signature:</b>
            {" 0x" + funcByteSignature}
          </Text>
        </>
      </Layout>
    </>
  )
}

export default Ethertools
