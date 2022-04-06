import ProjectType from "../../types/project"
import { Text } from "@mantine/core"

const schoolProjects: ProjectType[] = [
  {
    title: "Hashgraph",
    githubURL: "https://github.com/erhant/hashgraph",
    content: <Text>Flashy sort.</Text>,
    langs: ["go"],
  },
  {
    title: "Profile Matching",
    githubURL: "https://github.com/erhant/profile-matching",
    content: <Text>Flashy sort.</Text>,
    langs: ["py"],
  },
  {
    title: "EOPL Scheme",
    githubURL: "https://github.com/erhant/eopl-scheme",
    content: <Text>Flashy sort.</Text>,
    langs: [],
  },
  {
    title: "Parallel Programming",
    content: <Text>Flashy sort.</Text>,
    langs: ["c", "cpp"],
  },
]

export default schoolProjects
