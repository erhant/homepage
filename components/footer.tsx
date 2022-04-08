import { Anchor, Footer as _Footer, Group, Box, Text, Popover, Tooltip } from "@mantine/core"
import { BrandGithub, CurrencyEthereum } from "tabler-icons-react"
import { useState } from "react"
import Icon from "./icon"
import FancyWord from "./fancy-word"

const Footer = () => {
  const [ethOpened, setEthOpened] = useState(false)

  return (
    <_Footer height={0} py="md">
      <Group position="center">
        <Text>&copy; Erhan Tezcan {new Date().getFullYear()} &nbsp; </Text>
        <Tooltip label="Star this on GitHub!">
          <Anchor href="https://github.com/erhant/blog-static">
            <Icon I={BrandGithub} />
          </Anchor>
        </Tooltip>
        <Popover
          opened={ethOpened}
          onClose={() => setEthOpened(false)}
          target={<Icon I={CurrencyEthereum} onClick={() => setEthOpened((o) => !o)} sx={{ cursor: "pointer" }} />}
          width={300}
          position="top"
        >
          <Box>
            <Text>
              My <Anchor href="https://unstoppabledomains.com/">Unstoppable Domain</Anchor>:
            </Text>
            <Anchor href="https://ud.me/erhantezcan.wallet">
              <FancyWord word="erhantezcan.wallet" />
            </Anchor>
          </Box>
        </Popover>
      </Group>
    </_Footer>
  )
}

export default Footer
