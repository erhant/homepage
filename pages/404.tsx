import { Anchor, Badge, Text, Group, Title } from "@mantine/core"
import Layout from "../components/layout"
import Head from "next/head"
import { NextPage } from "next"

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Music</title>
        <meta name="description" content="Music recommendations." key="desc" />
      </Head>
      <Layout>
        <>
          <Title order={1} m="xl" sx={{ textAlign: "center" }}>
            No such page exists!
          </Title>
        </>
      </Layout>
    </>
  )
}

export default Custom404
