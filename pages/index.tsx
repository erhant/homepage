import Head from "next/head"
import Link from "next/link"
import { AppShell, Navbar, Stack, ThemeIcon, Group, Anchor, Container } from "@mantine/core"
import Header from "../components/header"
import Footer from "../components/footer"
// import styles from "../styles/index.scss"

// icons for navbar
import { IconUser, IconNotebook, IconCode, TablerIcon } from "@tabler/icons"
import { ReactElement } from "react"

const NavbarItemsList: [ReactElement, string, string][] = [
  [<IconUser />, "/about", "About"],
  [<IconNotebook />, "/posts", "Posts"],
  [<IconCode />, "/projects", "Projects"],
]

const Index = () => {
  return (
    <>
      <Head>
        <title>Welcome!</title>
      </Head>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 200 }}>
            <Stack align="stretch" px="xs" py="md">
              {NavbarItemsList.map((item, i) => {
                return (
                  <Navbar.Section key={i} component={Group}>
                    <ThemeIcon>{item[0]}</ThemeIcon>
                    <Link href={item[1]} passHref>
                      <Anchor component="a" color={"orange"} weight="bolder" size="lg">
                        {item[2]}
                      </Anchor>
                    </Link>
                  </Navbar.Section>
                )
              })}
            </Stack>
          </Navbar>
        }
        header={<Header />}
        footer={<Footer />}
      >
        <Container>
          <h1>Welcome to my homepage!</h1>
        </Container>
      </AppShell>
    </>
  )
}

export default Index
