import { Code, Home, Home2, MathFunction, School, Tool } from "tabler-icons-react"
import NavbarItemType from "../types/navbar"

export const navbarItems: NavbarItemType[] = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: Code,
  },
  {
    name: "Crypto",
    href: "https://crypto.erhant.me",
    icon: MathFunction,
  },
  {
    name: "Tools",
    href: "https://tools.erhant.me",
    icon: Tool,
  },
  {
    name: "CV",
    href: "/cv.pdf",
    icon: School,
  },
]
