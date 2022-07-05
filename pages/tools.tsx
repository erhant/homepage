import Layout from "../components/layout"
import { Stack, Text, Title } from "@mantine/core"
import Head from "next/head"
import Tool from "../components/tool"
import tools from "../content/tools"

const Tools = () => {
  return (
    <>
      <Head>
        <title>Tools</title>
        <meta name="description" content="All kinds of lightweight online tools by Erhan Tezcan." key="desc" />
      </Head>

      <Layout>
        <>
          <Title order={1} mb="md">
            Tools
          </Title>
          <Text mb="lg">I occasionally write some utility tools here for fun, ranging from math to crypto!</Text>
          <Stack>
            {tools.map((t, i) => {
              return <Tool t={t} key={i} />
            })}
          </Stack>
        </>
      </Layout>
    </>
  )
}

export default Tools
