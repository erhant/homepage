import { Paper, Title, Stack, Text } from "@mantine/core"
import type ProjectType from "../types/project"
import TechBadge from "./techbadge"
import LinkBadge from "./linkbadge"
import type { FC } from "react"
import NPMBadge from "./npmbadge"

const Project: FC<{
  p: ProjectType
}> = ({ p }) => {
  return (
    <Paper>
      <Title order={3}>{p.title}</Title>
      {p.githubURL && <LinkBadge type="repo" url={p.githubURL} />}
      {p.demoURL && <LinkBadge type="demo" url={p.demoURL} />}
      {p.tech.map((type, i) => (
        <TechBadge type={type} key={i} />
      ))}
      {p.npm && <NPMBadge name={p.npm} />}
      <Text>{p.content}</Text>
    </Paper>
  )
}

export default Project
