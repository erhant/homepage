import Head from "next/head"
import Layout from "../components/layout"
import { Text, Title } from "@mantine/core"

const Index = () => {
  return (
    <>
      <Head>
        <title>Who is Erhan?</title>
      </Head>
      <Layout>
        <>
          <Title>Who is Erhan?</Title>
          <Text>I am currently working at Macerita.</Text>
        </>
      </Layout>
    </>
  )
}

export default Index
