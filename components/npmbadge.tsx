import { FC } from "react"
import { Anchor } from "@mantine/core"

const NPMBadge: FC<{ name: string }> = ({ name }) => {
  return (
    <Anchor href={`https://www.npmjs.com/package/${name}`} mx={4} target="_blank">
      <img src={`https://img.shields.io/npm/v/${name}?logo=npm&color=CB3837`} alt="npm link" />
    </Anchor>
  )
}

export default NPMBadge
