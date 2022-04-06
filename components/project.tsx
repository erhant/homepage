import { Text, Paper, Title, Anchor, Divider, Box, Group, Tooltip, useMantineTheme } from "@mantine/core"
import ProjectType from "../types/project"
import { BrandGithub, World } from "tabler-icons-react"
import Icon from "./icon"
import Language from "./language"

type Props = {
  project: ProjectType
}
const Project = ({ project }: Props) => {
  const theme = useMantineTheme()
  return (
    <Paper shadow="lg" radius="xl" p="lg" withBorder>
      <Title>{project.title}</Title>
      {project.content}
      <Divider my="sm" />
      <Group>
        {project.githubURL && (
          <Tooltip label="See the code">
            <Anchor href={project.githubURL}>
              <Icon I={BrandGithub} size="md" />
            </Anchor>
          </Tooltip>
        )}

        {project.demoURL && (
          <Tooltip label="See online">
            <Anchor href={project.demoURL}>
              <Icon I={World} size="md" />
            </Anchor>
          </Tooltip>
        )}

        {/* empty space in between left and right*/}
        <Box sx={{ flexGrow: 1 }} />

        {project.langs.map((l, i) => (
          <Language l={l} key={i} />
        ))}
      </Group>
    </Paper>
  )
}

export default Project
