// the layout is simply header - footer - side navbar - content
import { AppShell, Container } from "@mantine/core"
import { ReactChild, ReactElement, useState } from "react"
import Header from "./header"
import Footer from "./footer"
import Navbar from "./navbar"

type Props = {
  children: ReactChild
}

const Layout = ({ children }: Props) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)

  return (
    <>
      <AppShell
        padding="md"
        navbar={<Navbar isNavbarOpen={isNavbarOpen} />}
        header={<Header isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />}
        footer={<Footer />}
      >
        <Container>{children}</Container>
      </AppShell>
    </>
  )
}

export default Layout
