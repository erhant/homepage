import { Text, Title, Box, Anchor, Collapse, Accordion, SimpleGrid, Stack, Center, Divider } from "@mantine/core"
import Language from "../language"

const DevStacks = () => {
  return (
    <Center my="md">
      <SimpleGrid cols={4} spacing="lg" sx={{ textAlign: "center", width: "60%" }}>
        <Stack>
          <Divider label="Frontend" labelPosition="center" />
          <Language l="ts" />
          <Language l="react" />
          <Language l="next" />
          <Language l="sass" />
        </Stack>
        <Stack>
          <Divider label="Backend" labelPosition="center" />
          <Language l="ts" />
          <Language l="node" />
          <Language l="express" />
        </Stack>
        <Stack>
          <Divider label="Academic" labelPosition="center" />
          <Language l="c" />
          <Language l="py" />
          <Language l="tex" />
        </Stack>
        <Stack>
          <Divider label="Hobby" labelPosition="center" />
          <Language l="hs" />
          <Language l="sol" />
        </Stack>
      </SimpleGrid>
    </Center>
  )
}

export default DevStacks
