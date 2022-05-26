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
  Progress,
} from "@mantine/core"
import Head from "next/head"
import { useEffect, useMemo, useState } from "react"
import { formulaToIntervals, getRandomNotes, intervalsToNotes, isValidFormula } from "../../lib/music"
import { MusicAccidental, MusicNote, MusicPosition } from "../../types/music"

const MusicPractice = () => {
  const theme = useMantineTheme()
  const [intervalTime, setIntervalTime] = useState(2)
  const [counter, setCounter] = useState(0)
  const [notes, setNotes] = useState<MusicNote[]>(["C", "E", "G"])
  const [noteCount, setNoteCount] = useState<number>(3)

  useEffect(() => {
    setCounter(0)
    let interval = setInterval(() => {
      setNotes(getRandomNotes(noteCount))
    }, intervalTime * 1000)
    let counter = setInterval(() => setCounter((c) => (c + 0.5) % intervalTime), 500)
    return () => {
      clearInterval(interval)
      clearInterval(counter)
    }
  }, [intervalTime, noteCount])

  return (
    <>
      <Head>
        <title>Random Music Notes</title>
        <meta name="description" content="Generate random music notes to practice your instrument." key="desc" />
      </Head>

      <Layout>
        <Title>Random Music Notes</Title>
        <Group position="center">
          <NumberInput
            label="Time Interval (seconds)"
            value={intervalTime}
            onChange={(val) => val && setIntervalTime(val)}
            min={1}
            max={30}
          />
          <NumberInput
            label="Note Count"
            value={noteCount}
            onChange={(val) => val && setNoteCount(val)}
            min={1}
            max={12}
          />
        </Group>
        <Progress value={((counter + 0.5) / intervalTime) * 100} size="sm" my="md" />
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
        </Box>
      </Layout>
    </>
  )
}

export default MusicPractice
