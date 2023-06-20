import { ReactNode } from "react"
import { TECH_BADGE_PARAMS } from "../contents/techbadge"

type ProjectType = {
  title: string
  githubURL?: string
  demoURL?: string
  langs: (keyof typeof TECH_BADGE_PARAMS)[]
  content: ReactNode
}

export default ProjectType
