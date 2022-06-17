import ProjectType from "../../types/project"
import { Text, Anchor, Code } from "@mantine/core"

const sideProjects: ProjectType[] = [
  {
    title: "Blockchattin",
    githubURL: "https://github.com/erhant/blockchattin",
    demoURL: "https://blockchattin.vercel.app/",
    langs: ["ts", "next", "react", "sol"],
    content: (
      <Text>
        A decentralized chatting application using smart contracts. Users address each other by their wallet addresses,
        but they can use aliases too. Each message is a transaction, which is logged as an EVM event to be queried by
        clients.
      </Text>
    ),
  },
  {
    title: "Lighthouse Problem",
    githubURL: "https://github.com/erhant/lighthouse-problem",
    demoURL: "https://erhant.github.io/lighthouse-problem/",
    langs: ["py", "js"],
    content: (
      <Text>
        During a 17-hour bus trip from Warsam to Talinn, I couldn't sleep in the bus so I thought of a problem to pass
        time. I then couldn't solve this problem, and wrote a paper about it; which this repository is about.{" "}
        <Anchor href="https://arxiv.org/abs/1903.09001">(paper)</Anchor>
      </Text>
    ),
  },
  {
    title: "Collatz Conjecture",
    langs: ["py", "ts", "hs", "cpp"],
    content: (
      <Text>
        As a form of recreational mathematics, I have been working on the Collatz Conjecture since late highschool. I
        made some small findings, mostly focusing on algebraic tools to study trajectories of numbers.{" "}
        <Anchor href="https://arxiv.org/abs/1902.07312">(paper)</Anchor>
      </Text>
    ),
  },
  {
    title: "Flashy Sort",
    githubURL: "https://github.com/erhant/flashy-sort",
    content: (
      <Text>
        Flashy Sort is a sorting algorithm I had written around my sophomore year, but turns out it is similar (and
        actually worse) than <Anchor href="https://en.wikipedia.org/wiki/Flashsort">Flash Sort</Anchor>. The idea is to
        find the minimum and maximum values in linear time, and then use interpolation to make a rough guess on where
        the other elements would be if the array were to be sorted.
      </Text>
    ),
    langs: ["cpp"],
  },
  {
    title: "NextJS + Web3 Starter",
    githubURL: "https://github.com/erhant/nextjs-web3-starter",
    demoURL: "https://nextjs-web3-starter-erhant.vercel.app/",
    content: (
      <Text>
        A TypeScript template repository to create decentralized applications using{" "}
        <Anchor href="https://nextjs.org/">NextJS</Anchor> and <Anchor href="https://hardhat.org/">Hardhat</Anchor>! Has
        a simple counter contract and an ERC-20 token contract example in it.
      </Text>
    ),
    langs: ["ts", "next", "sol"],
  },
  {
    title: "Musical Tools",
    githubURL: "https://github.com/erhant/musical-tools-for-everyone",
    demoURL: "https://musical-tools-for-everyone.vercel.app",
    content: (
      <Text>
        A React application to practice your instrument and music theory! Play along random notes, looking at their
        names and seeing them on score too; or practice scales and chords of your choice.
      </Text>
    ),
    langs: ["ts", "next", "sol"],
  },
  {
    title: "SpotiStuff",
    githubURL: "https://github.com/erhant/spoti-stuff",
    demoURL: "https://spoti-stuff.vercel.app/",
    langs: ["ts", "react"],
    content: (
      <Text>
        A collection of mini-applications I made using Spotify Web API. You can see audio features of your currently
        playing track, compare playlists of two users, and find if a user has added a track in some playlist.
      </Text>
    ),
  },
  {
    title: "Orca Livecoding",
    githubURL: "https://github.com/erhant/orca-livecoding",
    langs: [],
    content: (
      <Text>
        Of the various music livecoding programs, I particularly developed an interest in{" "}
        <Anchor href="https://hundredrabbits.itch.io/orca">Orca</Anchor>, which is a 2-dimensional esoteric programming
        language. I had some fun with it, such as creating a fretboard and tab-reader, or musical scale player with it.
        I am collecting such things in this repo!
      </Text>
    ),
  },
  {
    title: "Burning Castle",
    githubURL: "https://github.com/erhant/burning_castle",
    demoURL: "https://oeis.org/A343275",
    langs: ["py"],
    content: (
      <Text>
        My submissions to <Anchor href="https://oeis.org/">Online Encyclopedia of Integer Sequences</Anchor>. One
        submission in particular has really cool plots which resemble a burning castle, hence the name.
      </Text>
    ),
  },
  {
    title: "Musical Plots",
    githubURL: "https://github.com/erhant/musical-plots",
    langs: ["py"],
    content: (
      <Text>
        Using <Code>matplotlib</Code>, I have drawn a{" "}
        <Anchor href="https://en.wikipedia.org/wiki/Circle_of_fifths">Circle of Fifths</Anchor>, a fretboard, and a
        piano keyboard; with highlights on certain notes based on a scale or chord.
      </Text>
    ),
  },
  {
    title: "Homepage",
    githubURL: "https://github.com/erhant/homepage",
    langs: ["ts", "next"],
    content: (
      <Text>
        Well, this page itself is literally a side-project. It is loosely-based on the NextJS blog starter template, but
        I heavily modified and re-designed it with <Anchor href="https://mantine.dev/">Mantine UI</Anchor>.
      </Text>
    ),
  },
  {
    title: "Cryptography Notes",
    githubURL: "https://github.com/erhant/crypto-notes",
    demoURL: "https://crypto-notes-erhant.vercel.app/",
    langs: ["ts", "next"],
    content: (
      <Text>
        My notes from cryptography class; I revisit them as I transfer them online. Why? Well because cryptography is
        one of the coolest subjects I have known so far :)
      </Text>
    ),
  },
]

export default sideProjects
