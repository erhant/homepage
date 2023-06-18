import Link from "next/link"
import { Navbar as _Navbar, Stack, Group, Anchor, Popover, Tooltip, Burger } from "@mantine/core"
import Icon from "./icon"
import { Code, Home, MathFunction, School, Icon as TablerIcon, Tool } from "tabler-icons-react"
import { FC, useState } from "react"
import { motion } from "framer-motion"
import NavbarItemType from "../types/navbar"

const NavbarItemsList: NavbarItemType[] = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Project",
    href: "/project",
    icon: Code,
  },
  {
    name: "Crypto",
    href: "https://crypto.erhant.me",
    icon: MathFunction,
    openNewPage: true,
  },
  {
    name: "Tools",
    href: "https://tools.erhant.me",
    icon: Tool,
    openNewPage: true,
  },
  {
    name: "CV",
    href: "/cv.pdf",
    icon: School,
    openNewPage: true,
  },
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
                  <Icon I={item.icon} />
                  <Link href={item.href} passHref>
                    <Anchor
                      size="lg"
                      target={item.openNewPage ? "_blank" : undefined}
                      sx={(theme) => {
                        return {
                          color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.dark[9],
                          fontWeight: "bold",
                        }
                      }}
                    >
                      {item.name}
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
                <Tooltip label={item.name}>
                  <Link href={item.href} passHref>
                    <Anchor
                      size="lg"
                      target={item.openNewPage ? "_blank" : undefined}
                      sx={(theme) => {
                        return {
                          color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.dark[9],
                          fontWeight: "bold",
                        }
                      }}
                    >
                      <Icon I={item.icon} />
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
