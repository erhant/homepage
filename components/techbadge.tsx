import { Box } from "@mantine/core"
import { FC } from "react"
import { TECH_BADGE_PARAMS } from "../contents/techbadge"

const BASE_URL = "https://img.shields.io/badge/"

const TechBadge: FC<{ type: keyof typeof TECH_BADGE_PARAMS }> = ({ type }) => {
  const { p, alt } = TECH_BADGE_PARAMS[type]
  return (
    <Box component="span" mx={4}>
      <img src={BASE_URL + p} alt={alt} />
    </Box>
  )
}

export default TechBadge
