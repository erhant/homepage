import { Title } from "@mantine/core"
import Layout from "../components/layout"
import Head from "next/head"
import { NextPage } from "next"

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title> 4 0 4 </title>
      </Head>
      <Layout>
        <>
          <Title order={1} m="xl" sx={{ textAlign: "center" }}>
            {"It's 4:04, time to go to bed..."}
          </Title>
        </>
      </Layout>
    </>
  )
}

export default Custom404
