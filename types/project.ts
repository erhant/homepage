import { ReactNode } from "react"
import LanguageType from "./language"

type ProjectType = {
  title: string
  githubURL?: string
  demoURL?: string
  langs: LanguageType[]
  content: ReactNode
}

export default ProjectType
