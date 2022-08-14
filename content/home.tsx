import ContentType from "../types/home"
import { User, Code, Tool, Music } from "tabler-icons-react"

const content: ContentType[] = [
  {
    title: "About",
    href: "/about",
    icon: <User />,
    desc: "It's me, but more.",
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <Code />,
    desc: "The things I do & did.",
  },
  {
    title: "Tools",
    href: "/tools",
    icon: <Tool />,
    desc: "Tools from when I want to procrastinate my actual task.",
  },
  {
    title: "Music",
    href: "/music",
    icon: <Music />,
    desc: "A random song recommendation every day, and my playlists.",
  },
]

export default content
