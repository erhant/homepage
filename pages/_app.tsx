import { AppProps } from "next/app"
import { GetServerSidePropsContext } from "next"
import { useState } from "react"
import DefaultMantineTheme from "../themes/default"
// install cookies-next package to manage cookies
import { getCookie, setCookies } from "cookies-next"
import "../styles/globals.scss"
import { MantineProvider, ColorScheme, ColorSchemeProvider } from "@mantine/core"

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme)

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === "dark" ? "light" : "dark")
    setColorScheme(nextColorScheme)
    setCookies("mantine-color-scheme", nextColorScheme, { maxAge: 60 * 60 * 24 * 30 })
  }

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          ...DefaultMantineTheme,
          colorScheme,
          primaryColor: colorScheme === "dark" ? "blues" : "blues", // todo: do we want different colors for schemes?
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  // get color scheme from cookie
  colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
})
