import { FC } from "react"
import { Anchor } from "@mantine/core"

const LinkBadge: FC<{ url: string; type: "demo" | "repo" | "paper" }> = ({ url, type }) => {
  const logo = {
    demo: "byte",
    repo: "github",
    paper: "googlescholar",
  }[type]
  const label = {
    demo: "demo",
    repo: "repo",
    paper: "paper",
  }[type]
  return (
    <Anchor href={url} mx={4} target="_blank">
      <img src={`https://img.shields.io/badge/-${label}-gray?logo=${logo}&logoColor=white`} alt="repo link" />
    </Anchor>
  )
}

export default LinkBadge
