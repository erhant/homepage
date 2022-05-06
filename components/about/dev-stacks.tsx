import { Grid, Stack, Center, Divider } from "@mantine/core"
import { FC } from "react"
import Language from "../language"

const DevStacks: FC = () => {
  return (
    <Center my="md">
      <Grid sx={{ textAlign: "center", width: "60%" }}>
        <Grid.Col xs={6} sm={3}>
          <Stack>
            <Divider label="Frontend" labelPosition="center" />
            <Language l="ts" />
            <Language l="react" />
            <Language l="next" />
            <Language l="sass" />
          </Stack>
        </Grid.Col>
        <Grid.Col xs={6} sm={3}>
          <Stack>
            <Divider label="Backend" labelPosition="center" />
            <Language l="ts" />
            <Language l="node" />
            <Language l="express" />
            <Language l="sol" />
          </Stack>
        </Grid.Col>
        <Grid.Col xs={6} sm={3}>
          <Stack>
            <Divider label="Academic" labelPosition="center" />
            <Language l="c" />
            <Language l="py" />
            <Language l="tex" />
          </Stack>
        </Grid.Col>
        <Grid.Col xs={6} sm={3}>
          <Stack>
            <Divider label="Curious" labelPosition="center" />
            <Language l="hs" />
          </Stack>
        </Grid.Col>
      </Grid>
    </Center>
  )
}

export default DevStacks
