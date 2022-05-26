// Collatz sequence tool
import Layout from "../../components/layout"
import {
  Title,
  Text,
  NumberInput,
  Anchor,
  Button,
  Group,
  TextInput,
  Grid,
  NativeSelect,
  Box,
  useMantineTheme,
} from "@mantine/core"
import Head from "next/head"
import { useMemo, useState } from "react"
import { formulaToIntervals, intervalsToNotes, isValidFormula } from "../../lib/music"
import { MusicAccidental, MusicNote } from "../../types/music"

// https://spinditty.com/learning/chord-building-for-musicians

const MusicPractice = () => {
  const theme = useMantineTheme()
  const [formula, setFormula] = useState("1-3-5")
  const [formulaInput, setFormulaInput] = useState("1-3-5")
  const [formulaIsValid, setFormulaIsValid] = useState(true)
  const [accidental, setAccidental] = useState<MusicAccidental>("#")
  const [rootNote, setRootNote] = useState<MusicNote>("C")
  const intervals: number[] = useMemo(() => formulaToIntervals(formula), [formula])
  const intervalsDisplay: string = useMemo(
    () =>
      intervals
        .slice(1)
        .map((x) => x / 2)
        .join(" ")
        .toString()
        .replaceAll("0.5", "½") // do this first to get account for 0s
        .replaceAll(".5", "½"),
    [intervals]
  )
  const notes: MusicNote[] = useMemo(
    () => intervalsToNotes(intervals, rootNote, accidental),
    [intervals, rootNote, accidental]
  )

  return (
    <>
      <Head>
        <title>Music Formula Reader</title>
        <meta name="description" content="Read chord and scale formulas." key="desc" />
      </Head>

      <Layout>
        <Title>Music Formula Reader</Title>
        <Grid>
          <Grid.Col xs={12} sm={6}>
            <TextInput
              placeholder="e.g. 1-b3-5"
              label="Formula"
              value={formulaInput}
              onChange={(event) => {
                const f = event.currentTarget.value
                const valid = isValidFormula(f)
                if (valid) setFormula(event.currentTarget.value)
                setFormulaInput(f)
                setFormulaIsValid(valid)
              }}
              error={formulaIsValid ? undefined : "Invalid formula."}
            />
          </Grid.Col>
          <Grid.Col xs={6} sm={3}>
            <NativeSelect
              placeholder="(b) flat or (#) sharp"
              value={accidental}
              label="Accidentals"
              onChange={(event) => setAccidental(event.currentTarget.value as MusicAccidental)}
              data={["#", "b"]}
            />
          </Grid.Col>
          <Grid.Col xs={6} sm={3}>
            <NativeSelect
              placeholder="e.g. C"
              value={rootNote}
              label="Root"
              onChange={(event) => setRootNote(event.currentTarget.value as MusicNote)}
              data={["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"]}
            />
          </Grid.Col>
        </Grid>

        <Box
          p="md"
          my="md"
          sx={{
            width: "100%",
            borderRadius: "62px",
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : "whitesmoke",
            textAlign: "center",
          }}
        >
          <Text sx={{ fontSize: "calc(100vw/15)" }}>{notes.join(" ")}</Text>
          <Text>Intervals</Text>
          <Text sx={{ fontFamily: "monospace" }}>{intervalsDisplay}</Text>
        </Box>
      </Layout>
    </>
  )
}

export default MusicPractice
