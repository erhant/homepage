import ContentType from "../types/home"
import { User, Notebook, Code, Tool, Music } from "tabler-icons-react"

const content: ContentType[] = [
  {
    title: "About",
    href: "/about",
    icon: <User />,
    desc: "Who am I, what do I do & all that. Nice to meet you already :)",
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <Code />,
    desc: "Feel free to check out my projects. Most of it can be found on my GitHub, but I have some other stuff mentioned here too.",
  },
  {
    title: "Blog",
    href: "/posts",
    icon: <Notebook />,
    desc: "I will write about maths, music or programming every now and then. Keep an eye out if you enjoy these topics!",
  },
  {
    title: "Tools",
    href: "/tools",
    icon: <Tool />,
    desc: "Tools of all kinds of things, such as Impermanent Loss calculator or Collatz sequence finder.",
  },
  {
    title: "Music",
    href: "/music",
    icon: <Music />,
    desc: "A random song recommendation every day, and my playlists.",
  },
]

export default content
