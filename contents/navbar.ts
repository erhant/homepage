import { MathFunction, School, Tool } from "tabler-icons-react"
import NavbarItemType from "../types/navbar"

export const navbarItems: NavbarItemType[] = [
  {
    name: "Crypto",
    href: "https://crypto.erhant.me",
    icon: MathFunction,
    openNewPage: true,
  },
  {
    name: "Tools",
    href: "https://tools.erhant.me",
    icon: Tool,
    openNewPage: true,
  },
  {
    name: "CV",
    href: "/cv.pdf",
    icon: School,
    openNewPage: true,
  },
]
