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
      </Head>

      <Layout>
        <>
          <Title order={1} mb="md">
            Tools
          </Title>
          <Text mb="lg">
            I might have some utility tools here for fun, or other purposes. These may range from math to crypto, or
            visualizations!
          </Text>
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
