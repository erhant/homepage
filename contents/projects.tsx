import { Anchor, Code, Text } from "@mantine/core"
import ProjectType from "../types/project"

export const activeProjects: ProjectType[] = [
  {
    title: "HollowDB",
    githubURL: "https://github.com/firstbatchxyz/hollowdb",
    demoURL: "https://docs.hollowdb.xyz",
    npm: "hollowdb",
    content: <Text>A decentralized privacy-preserving key-value database, developed by FirstBatch.</Text>,
    tech: ["typescript", "circom"],
  },
  {
    title: "Warp Contracts Redis",
    githubURL: "https://github.com/firstbatchxyz/warp-contracts-redis",
    npm: "warp-contracts-redis",
    content: <Text>A SortKeyCache implementation for Warp Contracts using Redis, developed by FirstBatch.</Text>,
    tech: ["typescript", "redis"],
  },
  {
    title: "Circomkit",
    githubURL: "https://github.com/erhant/circomkit",
    demoURL: "https://github.com/erhant/circomkit-examples",
    npm: "circomkit",
    content: (
      <Text>
        An opinionated Circom development & testing environment. An example repository demonstrates the usage of
        Circomkit along with several circuits, such as a generic sudoku-solution circuit and{" "}
      </Text>
    ),
    tech: ["typescript", "circom"],
  },
  {
    title: "MoonMath Solutions",
    githubURL: "https://github.com/erhant/moonmath",
    content: <Text>Solutions to examples & code examples for MoontMath Manual to zkSNARKs.</Text>,
    tech: ["markdown", "sage"],
  },
  {
    title: "Cryptography Notes",
    githubURL: "https://crypto.erhant.me",
    demoURL: "https://crypto.erhant.me",
    content: <Text>Various notes related to cryptography, number theory and zero-knowledge.</Text>,
    tech: ["typescript", "markdown", "next"],
  },
]

export const schoolProjects: ProjectType[] = [
  {
    title: "Hashgraph",
    githubURL: "https://github.com/erhant/hashgraph",
    content: (
      <Text>
        An implementation of Hedera Hashgraph, written in Go language. It also has a simulation of transactions, with
        hashgraph live-display.
      </Text>
    ),
    tech: ["go"],
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
    tech: ["python"],
  },
  {
    title: "EOPL Scheme",
    githubURL: "https://github.com/erhant/eopl-scheme",
    content: (
      <Text>
        I was a teaching assistant for Programming Language Concepts in Koç University. In this repo, I have the
        materials that I had prepared for the class, such as projects and problem sessions. The content is based on the{" "}
        <Anchor href="https://eopl3.com/">Essentials of Programming Languages</Anchor> book.
      </Text>
    ),
    tech: ["racket"],
  },
  {
    title: "Enigma Machine",
    githubURL: "https://github.com/erhant/enigma-machine",
    content: <Text>An Enigma Machine, with custom rotor settings, eavesdropping simulation and chatting.</Text>,
    tech: ["typescript"],
  },
]

export const sideProjects: ProjectType[] = [
  {
    title: "Blockchatting",
    githubURL: "https://github.com/erhant/blockchatting",
    demoURL: "https://blockchatting.vercel.app/",
    tech: ["typescript", "next", "react", "solidity"],
    content: (
      <Text>
        A decentralized chatting application using smart contracts. Users address each other by their wallet addresses,
        but they can use aliases too. Each message is a transaction, which is logged as an EVM event to be queried by
        clients.
      </Text>
    ),
  },
  {
    title: "Contract Playground",
    githubURL: "https://github.com/erhant/contract-playground",
    tech: ["typescript", "solidity"],
    content: (
      <Text>
        A Hardhat template with TypeScript, includes several token implementations: ERC20, ERC721, ERC777, ERC1155 with
        their contracts and tests.
      </Text>
    ),
  },
  {
    title: "Solidity CTFs",
    githubURL: "https://github.com/erhant/solidity-ctfs",
    tech: ["typescript", "solidity"],
    content: <Text>Solutions to various solidity challenges such as Ethernaut, EVMPuzzles and QuillCFT.</Text>,
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
    tech: ["cpp"],
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
    tech: ["typescript", "next", "solidity"],
  },
  {
    title: "SpotiStuff",
    githubURL: "https://github.com/erhant/spoti-stuff",
    demoURL: "https://spoti-stuff.vercel.app/",
    tech: ["typescript", "react"],
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
    tech: [],
    content: (
      <Text>
        Of the various music livecoding programs, I particularly developed an interest in{" "}
        <Anchor href="https://hundredrabbits.itch.io/orca">Orca</Anchor>, which is a 2-dimensional esoteric programming
        language. I had some fun with it, such as creating a fretboard and tab-reader, or musical scale player with it.
      </Text>
    ),
  },
  {
    title: "Burning Castle",
    githubURL: "https://github.com/erhant/burning_castle",
    demoURL: "https://oeis.org/A343275",
    tech: ["python"],
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
    tech: ["python"],
    content: (
      <Text>
        Using <Code>matplotlib</Code>, I have drawn a{" "}
        <Anchor href="https://en.wikipedia.org/wiki/Circle_of_fifths">Circle of Fifths</Anchor>, a fretboard, and a
        piano keyboard; with highlights on certain notes based on a scale or chord.
      </Text>
    ),
  },
]

export const thesisProjects: ProjectType[] = [
  {
    title: "Exploring Mixed and Multi-Precision SpMV for GPUs",
    githubURL: "https://github.com/ParCoreLab/mixed-and-multi-spmv",
    demoURL: "https://ieeexplore.ieee.org/document/9980904",
    content: (
      <Text>
        As my M.Sc. thesis, I worked on the optimization of Sparse Matrix-Vector Multiplication in NVIDIA GPUs. For
        this, I have researched ways of using mixed-precision (32-bit and 64-bit in particular) to my advantage, such
        that the accuracy is not affected too much but we still gain benefits from the reduced precisions. The methods
        were further extended to support multi-precision (both precisions are used per se, at different times).
      </Text>
    ),
    tech: ["cpp", "python", "bash", "tex"],
  },
  {
    title: "Obtaining Mathematical Expressions of Numerical Algorithms",
    githubURL: "https://github.com/erhant/pseudomath",
    content: (
      <Text>
        As my B.Sc. thesis, I wrote a small toy C-like language using{" "}
        <Anchor href="https://github.com/zaach/jison">JISON</Anchor>. The parser converted the code into a three tuple:
        set of variables, set of functions, and the initial function as the entry point. The resulting functions are
        composed in such a way that an input to the initial function will result in an output, just like it would in the
        code. Although I did not know about it at time, this is greatly similar to{" "}
        <Anchor href="https://en.wikipedia.org/wiki/General_recursive_function">General Recursive Functions</Anchor>.
      </Text>
    ),
    tech: ["javascript", "tex"],
  },
]
