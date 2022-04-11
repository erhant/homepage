import { ReactNode } from "react"
import { Icon as TablerIcon } from "tabler-icons-react"

type ToolType = {
  title: string
  href: string
  description: ReactNode
  icon: TablerIcon
  wip?: boolean // work in progress?
}

export default ToolType
