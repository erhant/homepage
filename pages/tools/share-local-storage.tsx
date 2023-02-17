import { Title, Text } from "@mantine/core"
import Head from "next/head"
import { useEffect, useState } from "react"
import Layout from "../../components/layout"

const DOMAINS = ["http://localhost:3000"]

const ShareLocalStorage = () => {
  function messageHandler(
    event: MessageEvent<{
      action: "get" | "save" | "returnData"
      key: string
      value: any
    }>
  ) {
    // must be an allowed domain
    console.log("Got event data:", event.data)
    console.log("Sender:", event.origin)
    if (!DOMAINS.includes(event.origin)) {
      throw Error("Domain not allowed")
    }

    // get event
    const { action, key, value } = event.data

    if (action == "save") {
      // sender wants to save a value in this local storage
      window.localStorage.setItem(key, JSON.stringify(value))
    } else if (action == "get" && event.source) {
      // sender wants to load a value from this local storage
      let value = window.localStorage.getItem(key)

      // we convert the value to JSON if it has the correct from
      if (value && typeof value !== "string") {
        value = JSON.parse(value)
      } else {
        value = null
      }

      // postMessage to the sender
      event.source.postMessage(
        {
          action: "returnData",
          key,
          value,
        },
        "*" as any // TODO: use actual domain here
      )
    }
  }

  useEffect(() => {
    window.addEventListener("message", messageHandler, false)
  }, [])

  return (
    <Layout>
      <Head>
        <title>Share local storage</title>
        <meta name="description" content="An impermanent loss calculator." key="desc" />
      </Head>
      <Title order={1} my="md">
        Share Local Storage
      </Title>
      <Text>
        Just set some local storage key-value's from your developer tools. Open up a locally hosted application that
        uses this page as an iframe. It will try to read the local storage of this domain!
      </Text>
    </Layout>
  )
}

export default ShareLocalStorage
