// the layout is simply header - footer - side navbar - content

const Layout = () => {
  return (
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
  )
}

export default Layout
