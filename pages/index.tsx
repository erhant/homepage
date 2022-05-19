import { Card, Center, Anchor, Title, Stepper, Text, Stack, Button } from "@mantine/core"
import Head from "next/head"
import Layout from "../components/layout"
import { motion, MotionValue } from "framer-motion"
import { User, Notebook, Code, Tool, Music } from "tabler-icons-react"
import { NextPage } from "next"
import { FC, ReactNode, useState } from "react"
import assert from "assert"

type ContentType = {
  title: string
  href: string
  desc: string
  icon: ReactNode
}
type ElementIndexType = {
  prev: number
  active: number
  next: number
}
const content: ContentType[] = [
  {
    title: "About",
    href: "/about",
    icon: <User />,
    desc: "First, you might want to find out who am I, what do I do & all that. Nice to meet you already :)",
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <Code />,
    desc: "Then feel free to check out my projects. Most of them are on my GitHub, but I have some other stuff mentioned here too.",
  },
  {
    title: "Blog",
    href: "/posts",
    icon: <Notebook />,
    desc: "I will write stuff about maths, music or programming every now and then. Keep your eye out if you enjoy them!",
  },
  {
    title: "Tools",
    href: "/tools",
    icon: <Tool />,
    desc: "Tools of all kinds of things, such as finding prime factors of a number, impermanent loss calculator, automated market-maker trade calculator, and Collatz sequence finder.",
  },
  {
    title: "Music",
    href: "/music",
    icon: <Music />,
    desc: "A random song recommendation every day, and some playlists!",
  },
]
const Index: NextPage = () => {
  assert(content.length > 1)
  const [elementIndex, setElementIndex] = useState<ElementIndexType>({
    prev: content.length - 1,
    active: 0,
    next: 1,
  })
  const nextElementIndex = (i: ElementIndexType) => ({
    prev: i.prev === content.length - 1 ? 0 : i.prev + 1,
    active: i.prev,
    next: i.active,
  })
  const prevElementIndex = (i: ElementIndexType) => ({
    prev: i.active,
    active: i.next,
    next: i.next === 0 ? content.length - 1 : i.next - 1,
  })
  const ContentView: FC<{ c: ContentType }> = ({ c }) => (
    <span style={{ textAlign: "center" }}>
      <Title>{c.title}</Title>
      <Text>fdskhfkj</Text>
    </span>
  )

  return (
    <>
      <Head>
        <title>Hey! 🥂</title>
        <meta name="description" content="Homepage of Erhan Tezcan." key="desc" />
      </Head>
      <Layout>
        <>
          <Title order={1} my="md" sx={{ textAlign: "center" }}>
            Welcome, stranger.
          </Title>
          {/* <Center>
            <Stepper
              my="xl"
              active={-1}
              onStepClick={() => {}}
              orientation="vertical"
            >
              {content.map((c, i) => (
                <Stepper.Step
                  key={i}
                  label={
                    <Anchor href={c.href}>
                      <Title>{c.title}</Title>
                    </Anchor>
                  }
                  description={c.desc}
                  icon={c.icon}
                />
              ))}
            </Stepper>
          </Center> */}
          <Button onClick={() => setElementIndex(nextElementIndex)}>Next</Button>
          <Button onClick={() => setElementIndex(prevElementIndex)}>Prev</Button>

          {content.map((c, i) => (
            <motion.div
              key={i}
              style={{ originX: "50%", originY: "25vh", display: "inline-block" }}
              animate={{ rotate: (360 / content.length) * (i + elementIndex.active) }}
            >
              <ContentView c={c} />
            </motion.div>
          ))}
        </>
      </Layout>
    </>
  )
}

export default Index
