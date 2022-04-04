import Head from "next/head"
import Link from "next/link"
import { AppShell, Navbar, Header, Footer, Stack, ThemeIcon, Group, Anchor, Container } from "@mantine/core"
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
        header={
          <Header height={60} p="xs">
            <p>This is my header.</p>
          </Header>
        }
        footer={
          <Footer height={30} p="xs">
            &copy; Erhan Tezcan {new Date().getFullYear()} &nbsp;&nbsp; (
            <a href="https://github.com/erhant/blog-static">GitHub</a>)
          </Footer>
        }
      >
        <Container>
          <h1>Welcome to my homepage!</h1>
        </Container>
      </AppShell>
    </>
  )
}

export default Index
