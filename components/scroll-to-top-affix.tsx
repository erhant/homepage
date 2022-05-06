import { Affix, Button, Container, Text, Transition, useMantineTheme } from "@mantine/core"
import { ArrowUp } from "tabler-icons-react"
import { useWindowScroll } from "@mantine/hooks"
import { FC } from "react"

const ScrollToTopAffix: FC = () => {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button variant="subtle" leftIcon={<ArrowUp />} style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
            Scroll to top
          </Button>
        )}
      </Transition>
    </Affix>
  )
}

export default ScrollToTopAffix
