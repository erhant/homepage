import Head from "next/head"
import Layout from "../components/layout"
import { Text, Title, Box } from "@mantine/core"

const Index = () => {
  return (
    <>
      <Head>
        <title>Who is Erhan?</title>
      </Head>
      <Layout>
        <Box>
          <Title order={1}>Who is Erhan?</Title>
          <Text>I am currently working at Macerita.</Text>
        </Box>
      </Layout>
    </>
  )
}

export default Index
