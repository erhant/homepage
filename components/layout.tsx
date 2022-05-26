// the layout is simply header - footer - side navbar - content
import { Container } from "@mantine/core"
import { FC, ReactNode } from "react"
import Header from "./header"
import Footer from "./footer"

const Layout: FC<{
  children: ReactNode
}> = ({ children }) => {
  return (
    <>
      <div className="layout">
        <Header />
        <main>
          <Container size="lg">{children}</Container>
        </main>
        <div style={{ flexGrow: 1 }} />
        <Footer />
      </div>
    </>
  )
}

export default Layout
