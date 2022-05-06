// the layout is simply header - footer - side navbar - content
import { AppShell, Container } from "@mantine/core"
import { FC, ReactChild } from "react"
import Header from "./header"
import Footer from "./footer"
import Navbar from "./navbar"

const Layout: FC<{
  children: ReactChild
}> = ({ children }) => {
  return (
    <>
      <AppShell padding="md" header={<Header />} footer={<Footer />}>
        <Container>{children}</Container>
      </AppShell>
    </>
  )
}

export default Layout
