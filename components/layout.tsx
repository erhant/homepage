// the layout is simply header - footer - side navbar - content
import { AppShell, Container } from "@mantine/core"
import { ReactChild, ReactElement } from "react"
import Header from "./header"
import Footer from "./footer"
import Navbar from "./navbar"

type Props = {
  header?: ReactElement
  footer?: ReactElement
  navbar?: ReactElement
  children: ReactChild
}

const Layout = ({ header, footer, navbar, children }: Props) => {
  return (
    <>
      <AppShell
        padding="md"
        navbar={navbar ? navbar : <Navbar />}
        header={header ? header : <Header />}
        footer={footer ? footer : <Footer />}
        styles={(theme) => ({
          root: { borderStyle: "hidden" },
          main: { borderStyle: "hidden" },
          body: { borderStyle: "hidden" },
        })}
      >
        <Container>{children}</Container>
      </AppShell>
    </>
  )
}

export default Layout
