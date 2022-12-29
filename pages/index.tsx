import { Center, Anchor, Title, Stepper } from "@mantine/core"
import Head from "next/head"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import { NextPage } from "next"
import type ContentType from "../types/home"
import { User, Code, Tool } from "tabler-icons-react"

const content: ContentType[] = [
  {
    title: "About",
    href: "/about",
    icon: <User />,
    desc: "It's me, but more.",
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <Code />,
    desc: "The things I do & did.",
  },
  {
    title: "Tools",
    href: "/tools",
    icon: <Tool />,
    desc: "Tools from when I want to procrastinate my actual task.",
  },
]

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>🥂</title>
        <meta name="description" content="Homepage of me." key="desc" />
      </Head>
      <Layout>
        <>
          <Center sx={{ width: "min(600px,100%)", margin: "auto" }}>
            <Stepper
              my="xl"
              active={-1}
              onStepClick={() => {}}
              orientation="vertical"
              styles={{
                separator: {
                  minHeight: "60px",
                },
                stepLabel: {
                  fontSize: "2em",
                },
                stepDescription: {
                  fontSize: "1.2em",
                },
                step: {
                  cursor: "default",
                },
              }}
            >
              {content.map((c, i) => (
                <Stepper.Step
                  key={i}
                  label={
                    <motion.div initial={{ x: 0 }} whileHover={{ x: 20 }} transition={{ ease: "easeOut" }}>
                      <Anchor href={c.href}>
                        <Title>{c.title}</Title>
                      </Anchor>
                    </motion.div>
                  }
                  description={c.desc}
                  icon={c.icon}
                />
              ))}
            </Stepper>
          </Center>
        </>
      </Layout>
    </>
  )
}

export default Index
