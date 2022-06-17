// Collatz sequence tool
import Layout from "../../components/layout"
import { Title, Text, NumberInput, Anchor, Button, Group, TextInput, Table, Input } from "@mantine/core"
import Head from "next/head"
import { useEffect, useState } from "react"
import keccak256 from "keccak256"
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
  const [funcEncoded, setFuncEncoded] = useState("")

  function encodeFunction(funcStr: string) {
    // regex assures this to work
    let params = funcStr.indexOf("(")
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
                <b>Ether-Unit Converter</b>. See{" "}
                <Anchor href="https://ethdocs.org/en/latest/ether.html">ethdocs</Anchor> for more information on units.
              </li>
              <li>
                <b>Hashing</b> Find the Keccak256 (SHA3) hash of any string.
              </li>
              <li>
                <b>Function Signature Encoder</b>.
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
                {/* <th>Value</th> */}
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
                  {/* <td>{`1e${i * 3} wei`}</td> */}
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
            {"   0x" + hashValue}
          </Text>

          <Title order={2} my="md">
            Function Signature Encoder
          </Title>
          <TextInput
            value={funcText}
            onChange={(event) => setHashText(event.currentTarget.value)}
            label="Function Signature"
            placeholder="function transfer(address _from, uint256 _amount) public;"
            rightSection={
              <Button
                onClick={() => {
                  setFuncEncoded(keccak256(funcText).toString("hex"))
                }}
              >
                Encode
              </Button>
            }
          />
          <Text my="md">
            <b>Canonical Form:</b>
            {funcEncoded}
          </Text>
          <Text my="md">
            <b>Bytes Signature:</b>
            {"   " + keccak256(funcEncoded).toString("hex").slice(0, 8)}
          </Text>
        </>
      </Layout>
    </>
  )
}

export default Ethertools
