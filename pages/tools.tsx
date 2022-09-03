import Layout from "../components/layout"
import { Stack, Title } from "@mantine/core"
import Head from "next/head"
import Tool from "../components/tool"
import tools from "../content/tools"

const Tools = () => {
  return (
    <>
      <Head>
        <title>Tools</title>
        <meta name="description" content="All kinds of tools!" key="desc" />
      </Head>

      <Layout>
        <>
          <Title order={1} mb="md">
            Tools
          </Title>
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
