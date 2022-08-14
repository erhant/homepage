import { Grid, Title, Stack, Center, Divider } from "@mantine/core"
import { FC } from "react"
import LanguageType from "../../types/language"
import Language from "../language"

const stacks: {
  title: string
  langs: LanguageType[]
}[] = [
  {
    title: "Frontend",
    langs: ["ts", "react", "next", "sass"],
  },
  {
    title: "Backend",
    langs: ["ts", "node", "express", "sol"],
  },
  {
    title: "Academic",
    langs: ["cpp", "c", "py", "tex"],
  },
  {
    title: "Curious",
    langs: ["hs", "rust"],
  },
]
const TITLE_ORDER = 3
const DevStacks: FC = () => {
  return (
    <Center my="md">
      <Grid sx={{ textAlign: "center", width: "60%" }}>
        {stacks.map(({ title, langs }) => (
          <Grid.Col xs={6} sm={3}>
            <Stack>
              <Divider label={<Title order={TITLE_ORDER}>{title}</Title>} labelPosition="center" />
              {langs.map((l) => (
                <Language l={l} />
              ))}
            </Stack>
          </Grid.Col>
        ))}
      </Grid>
    </Center>
  )
}

export default DevStacks
