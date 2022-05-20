import ProjectType from "../../types/project"
import { Text, Anchor } from "@mantine/core"
import FancyWord from "../../components/fancy-word"

const schoolProjects: ProjectType[] = [
  {
    title: "Hashgraph",
    githubURL: "https://github.com/erhant/hashgraph",
    content: (
      <Text>
        An implementation of Hedera Hashgraph, written in Go language. It also has a simulation of transactions, with
        hashgraph live-display.
      </Text>
    ),
    langs: ["go"],
  },
  {
    title: "Profile Matching",
    githubURL: "https://github.com/erhant/profile-matching",
    content: (
      <Text>
        With a small dataset of Facebook and Twitter users, we matched profiles using machine learning. Note that the
        profiles did not necessarily have the same username!
      </Text>
    ),
    langs: ["py"],
  },

  {
    title: "Parallel Programming",
    content: (
      <>
        <FancyWord word="Teaching Assistantship" />
        <Text>
          I was a teaching assistant for Parallel Programming, but more importantly I did my Master studies in
          ParCoreLab, which is a research group focused on parallel programming. As such, I store some parallel programs
          in this repo.
        </Text>
      </>
    ),
    langs: ["c", "cpp"],
  },
  {
    title: "EOPL Scheme",
    githubURL: "https://github.com/erhant/eopl-scheme",
    content: (
      <>
        <FancyWord word="Teaching Assistantship" />
        <Text>
          I was a teaching assistant for Programming Language Concepts in Koç University. In this repo, I have the
          materials that I had prepared for the class, such as projects and problem sessions. The content is based on
          the <Anchor href="https://eopl3.com/">Essentials of Programming Languages</Anchor> book.
        </Text>
      </>
    ),
    langs: [],
  },
  {
    title: "Enigma Machine",
    githubURL: "https://github.com/erhant/enigma-machine",
    content: (
      <Text>
        An Enigma Machine, with custom rotor settings, eavesdropping simulation and chatting! Shamefully, chatting is
        done from console, not web (yet).
      </Text>
    ),
    langs: ["ts"],
  },
]

export default schoolProjects
