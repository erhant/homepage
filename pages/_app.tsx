import { AppProps } from "next/app"
import Head from "next/head"
import { MantineProvider } from "@mantine/core"
import MantineTheme from "../styles/theme"
import "../styles/globals.scss"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={MantineTheme}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
