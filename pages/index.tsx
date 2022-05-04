import { Card, Center, Anchor, Title, Stepper, Transition } from "@mantine/core"
import Head from "next/head"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import { User, Notebook, Code, Tool } from "tabler-icons-react"

const Index = () => {
  return (
    <>
      <Head>
        <title>Hey! 🥂</title>
        <meta name="description" content="Homepage of Erhan Tezcan." key="desc" />
      </Head>
      <Layout>
        <>
          <Title order={1} mb="md">
            Welcome, stanger.
          </Title>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Center>
              <Stepper
                my="xl"
                active={-1}
                onStepClick={() => {}}
                orientation="vertical"
                styles={{
                  separator: {
                    minHeight: "85px",
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
                <Stepper.Step
                  label={
                    <Anchor href="/about">
                      <Title>About me</Title>
                    </Anchor>
                  }
                  description="First, you might want to find out who am I, what do I do & all that. Nice to meet you already :)"
                  icon={<User />}
                />
                <Stepper.Step
                  label={
                    <Anchor href="/projects">
                      <Title>My projects</Title>
                    </Anchor>
                  }
                  description="Then feel free to check out my projects. Most of them are on my GitHub, but I have some other stuff mentioned here too."
                  icon={<Code />}
                />
                <Stepper.Step
                  label={
                    <Anchor href="/posts">
                      <Title>My blog</Title>
                    </Anchor>
                  }
                  description="I will write stuff about maths, music or programming every now and then. Keep your eye out if you enjoy them!"
                  icon={<Notebook />}
                />
                <Stepper.Step
                  label={
                    <Anchor href="/tools">
                      <Title>Tools</Title>
                    </Anchor>
                  }
                  description="Tools of all kinds of things, such as finding prime factors of a number, impermanent loss calculator, automated market-maker trade calculator, and Collatz sequence finder."
                  icon={<Tool />}
                />
              </Stepper>
            </Center>
          </motion.div>
        </>
      </Layout>
    </>
  )
}

export default Index
