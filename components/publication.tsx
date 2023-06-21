import { Paper, Group, Text } from "@mantine/core"
import TechBadge from "./techbadge"
import LinkBadge from "./linkbadge"
import type { FC } from "react"
import type PublicationType from "../types/publication"

const Publication: FC<{ p: PublicationType }> = ({ p }) => {
  return (
    <Paper>
      <Text>{p.content}</Text>
      {p.githubURL && <LinkBadge type="repo" url={p.githubURL} />}
      {p.paperURL && <LinkBadge type="paper" url={p.paperURL} />}
      {p.tech.map((type, i) => (
        <TechBadge type={type} key={i} />
      ))}
    </Paper>
  )
}

export default Publication
