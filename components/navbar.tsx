import Link from "next/link"
import { Navbar as _Navbar, Stack, Group, Anchor, Popover, Tooltip, Burger } from "@mantine/core"
import Icon from "./icon"
import { FC, useState } from "react"
import { navbarItems } from "../contents/navbar"

const Navbar: FC<{ isBurger: boolean; className?: string }> = ({ isBurger, className }) => {
  const [opened, setOpened] = useState(false)

  return (
    // className is given by the mediaquery
    <span className={className}>
      {isBurger ? (
        <Popover opened={opened} onClose={() => setOpened(false)} width={200} position="bottom" withArrow={false}>
          <Popover.Target>
            <Burger opened={opened} onClick={() => setOpened((o) => !o)} />
          </Popover.Target>
          <Popover.Dropdown>
            <Stack align="stretch" spacing={4}>
              {navbarItems.map((item, i) => {
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
          </Popover.Dropdown>
        </Popover>
      ) : (
        <Group>
          {navbarItems.map((item, i) => {
            return (
              <Tooltip label={item.name} key={i}>
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
            )
          })}
        </Group>
      )}
    </span>
  )
}

export default Navbar
