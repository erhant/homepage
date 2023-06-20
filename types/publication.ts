import { ReactNode } from "react"
import { TECH_BADGE_PARAMS } from "../contents/techbadge"

type PublicationType = {
  githubURL: string
  paperURL: string
  langs: (keyof typeof TECH_BADGE_PARAMS)[]
  content: ReactNode
}

export default PublicationType
