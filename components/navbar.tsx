import Link from "next/link"
import { Navbar as _Navbar, Stack, Group, Anchor, Popover, Tooltip, Burger } from "@mantine/core"
import Icon from "./icon"
// icons for navbar
import { User, Notebook, Code, Home, Tool, Music, School, Icon as TablerIcon } from "tabler-icons-react"
import { FC, useState } from "react"
import { motion } from "framer-motion"

const NavbarItemsList: [TablerIcon, string, string][] = [
  [Home, "/", "Home"],
  [User, "/about", "About"],
  [Code, "/projects", "Projects"],
  [Notebook, "/posts", "Blog"],
  [Tool, "/tools", "Tools"],
  [Music, "/music", "Music"],
  [School, "/cv.pdf", "CV"],
]

const Navbar: FC<{ isBurger: boolean; className?: string }> = ({ isBurger, className }) => {
  const [opened, setOpened] = useState(false)

  return (
    // className is given by the mediaquery
    <span className={className}>
      {isBurger ? (
        <Popover
          opened={opened}
          onClose={() => setOpened(false)}
          target={<Burger opened={opened} onClick={() => setOpened((o) => !o)} />}
          width={200}
          position="bottom"
          withArrow={false}
          withCloseButton={false}
        >
          <Stack align="stretch" spacing={4}>
            {NavbarItemsList.map((item, i) => {
              return (
                <_Navbar.Section key={i} component={Group}>
                  <Icon I={item[0]} />
                  <Link href={item[1]} passHref>
                    <Anchor
                      size="lg"
                      target={item[2] == "CV" ? "_blank" : undefined}
                      sx={(theme) => {
                        return {
                          color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.dark[9],
                          fontWeight: "bold",
                        }
                      }}
                    >
                      {item[2]}
                    </Anchor>
                  </Link>
                </_Navbar.Section>
              )
            })}
          </Stack>
        </Popover>
      ) : (
        <Group>
          {NavbarItemsList.map((item, i) => {
            return (
              <motion.div whileHover={{ scale: 1.45 }} key={i}>
                <Tooltip label={item[2]}>
                  <Link href={item[1]} passHref>
                    <Anchor
                      size="lg"
                      target={item[2] == "CV" ? "_blank" : undefined}
                      sx={(theme) => {
                        return {
                          color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.dark[9],
                          fontWeight: "bold",
                        }
                      }}
                    >
                      <Icon I={item[0]} />
                    </Anchor>
                  </Link>
                </Tooltip>
              </motion.div>
            )
          })}
        </Group>
      )}
    </span>
  )
}

export default Navbar
