import { Card, Center, Anchor, Title, Stepper } from "@mantine/core"
import Head from "next/head"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import { NextPage } from "next"
import content from "../content/home"

const Index: NextPage = () => {
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

          {/* <Group position="center" style={{ overflow: "hidden", paddingTop: "50px", paddingBottom: "50px" }}>
            {content.map((c, i) => (
              <motion.span
                key={i}
                style={{ originX: "50%", originY: "25vh", opacity: 1 }}
                animate={{
                  rotate: (360 / content.length) * (i - elementIndex.active),
                  opacity: elementIndex.active == i ? 1 : 0.2,
                }}
              >
                <ContentView c={c} />
              </motion.span>
            ))}
          </Group>
          <Group position="center">
            <Button onClick={() => setElementIndex(nextElementIndex)}>Next</Button>
            <Button onClick={() => setElementIndex(prevElementIndex)}>Prev</Button>
          </Group> */}
        </>
      </Layout>
    </>
  )
}

export default Index
