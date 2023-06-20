import { Paper, Title, Stack } from "@mantine/core"
import type ProjectType from "../types/project"
import TechBadge from "./techbadge"
import LinkBadge from "./linkbadge"
import type { FC } from "react"

const Project: FC<{
  p: ProjectType
}> = ({ p }) => {
  return (
    <Paper>
      <Title order={3}>{p.title}</Title>

      {p.githubURL && <LinkBadge type="repo" url={p.githubURL} />}
      {p.demoURL && <LinkBadge type="demo" url={p.demoURL} />}

      {p.langs.map((type, i) => (
        <TechBadge type={type} key={i} />
      ))}

      {p.content}
    </Paper>
  )
}

export default Project
