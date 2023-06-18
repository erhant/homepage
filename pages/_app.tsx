import { AppProps } from "next/app"
import { useEffect, useState } from "react"
import DefaultMantineTheme from "../themes/default"
import { getCookie, setCookies } from "cookies-next"
import { MantineProvider, ColorScheme, ColorSchemeProvider } from "@mantine/core"
import { CookieValueTypes } from "cookies-next/lib/types"
import "../styles/globals.scss"

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light")

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === "dark" ? "light" : "dark")
    setColorScheme(nextColorScheme)
    setCookies("mantine-color-scheme", nextColorScheme, { maxAge: 60 * 60 * 24 * 30 })
  }

  // decide color scheme on mount
  useEffect(() => {
    const color: CookieValueTypes = getCookie("mantine-color-scheme")
    if (!color) {
      setColorScheme("light")
    } else setColorScheme(color.toString() as "light" | "dark")
  }, [])

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
