import type { JSXElement } from "solid-js";
import type { TECH_BADGE_PARAMS } from "../contents/techbadge";

export type ProjectType = {
  title: string;
  githubURL?: string;
  demoURL?: string;
  npm?: string;
  tech: (keyof typeof TECH_BADGE_PARAMS)[];
  content: JSXElement;
};

export const activeProjects: ProjectType[] = [
  {
    title: "HollowDB",
    githubURL: "https://github.com/firstbatchxyz/hollowdb",
    demoURL: "https://docs.hollowdb.xyz",
    npm: "hollowdb",
    content: (
      <p>
        A decentralized privacy-preserving key-value database, developed by
        FirstBatch.
      </p>
    ),
    tech: ["typescript", "circom"],
  },
  {
    title: "Warp Contracts Redis",
    githubURL: "https://github.com/firstbatchxyz/warp-contracts-redis",
    npm: "warp-contracts-redis",
    content: (
      <p>
        A SortKeyCache implementation for Warp Contracts using Redis, developed
        by FirstBatch.
      </p>
    ),
    tech: ["typescript", "redis"],
  },
  {
    title: "Circomkit",
    githubURL: "https://github.com/erhant/circomkit",
    demoURL: "https://github.com/erhant/circomkit-examples",
    npm: "circomkit",
    content: (
      <p>
        An opinionated Circom development & testing environment. An example
        repository demonstrates the usage of Circomkit along with several
        circuits, such as a generic sudoku-solution circuit and SHA256.
      </p>
    ),
    tech: ["typescript", "circom"],
  },
  {
    title: "MoonMath Solutions",
    githubURL: "https://github.com/erhant/moonmath",
    content: (
      <p>
        Solutions to a few exercises & code examples for MoontMath Manual to
        zkSNARKs.
      </p>
    ),
    tech: ["markdown", "sage"],
  },
  {
    title: "Cryptography Notes",
    githubURL: "https://crypto.erhant.me",
    demoURL: "https://crypto.erhant.me",
    content: (
      <p>
        Various notes related to cryptography, number theory and zero-knowledge.
      </p>
    ),
    tech: ["typescript", "markdown", "next"],
  },
];

export const schoolProjects: ProjectType[] = [
  {
    title: "Hashgraph",
    githubURL: "https://github.com/erhant/hashgraph",
    content: (
      <p>
        An implementation of Hedera Hashgraph, written in Go language. It also
        has a simulation of transactions, with hashgraph live-display.
      </p>
    ),
    tech: ["go", "javascript"],
  },
  {
    title: "Profile Matching",
    githubURL: "https://github.com/erhant/profile-matching",
    content: (
      <p>
        With a small dataset of Facebook and Twitter users, we matched profiles
        using machine learning. Note that the profiles did not necessarily have
        the same username!
      </p>
    ),
    tech: ["python"],
  },
  {
    title: "EOPL Scheme",
    githubURL: "https://github.com/erhant/eopl-scheme",
    content: (
      <p>
        I was a teaching assistant for Programming Language Concepts in Koç
        University. In this repo, I have the materials that I had prepared for
        the class, such as projects and problem sessions. The content is based
        on the{" "}
        <a href="https://eopl3.com/">Essentials of Programming Languages</a>{" "}
        book.
      </p>
    ),
    tech: ["racket"],
  },
  {
    title: "Enigma Machine",
    githubURL: "https://github.com/erhant/enigma-machine",
    content: (
      <p>
        An Enigma Machine, with custom rotor settings, eavesdropping simulation
        and chatting.
      </p>
    ),
    tech: ["typescript"],
  },
];

export const sideProjects: ProjectType[] = [
  {
    title: "Blockchatting",
    githubURL: "https://github.com/erhant/blockchatting",
    demoURL: "https://blockchatting.vercel.app/",
    tech: ["typescript", "next", "react", "solidity"],
    content: (
      <p>
        A decentralized chatting application using smart contracts. Users
        address each other by their wallet addresses, but they can use aliases
        too. Each message is a transaction, which is logged as an EVM event to
        be queried by clients.
      </p>
    ),
  },
  {
    title: "FFType",
    githubURL: "https://github.com/erhant/fftype",
    tech: ["typescript"],
    content: (
      <p>
        A type-bending project where I try to implement finite-field arithmetic
        within the TypeScript's type-system.
      </p>
    ),
  },
  {
    title: "Simple Block-Explorer",
    githubURL: "https://github.com/erhant/simple-blockexplorer",
    demoURL: "https://simple-blockexplorer-erhant.vercel.app/",
    tech: ["typescript", "next"],
    content: (
      <p>
        A simple client-only block-explorer, where you can connect to any public
        JSON-RPC url and explore it's blocks.
      </p>
    ),
  },
  {
    title: "Contract Playground",
    githubURL: "https://github.com/erhant/contract-playground",
    tech: ["typescript", "solidity"],
    content: (
      <p>
        A Hardhat template with TypeScript, includes several token
        implementations: ERC20, ERC721, ERC777, ERC1155 with their contracts and
        tests.
      </p>
    ),
  },
  {
    title: "Solidity CTFs",
    githubURL: "https://github.com/erhant/solidity-ctfs",
    tech: ["typescript", "solidity"],
    content: (
      <p>
        Solutions to various Solidity &amp; EVM challenges such as Ethernaut,
        EVMPuzzles and QuillCFT.
      </p>
    ),
  },
  {
    title: "Flashy Sort",
    githubURL: "https://github.com/erhant/flashy-sort",
    content: (
      <p>
        Flashy Sort is a sorting algorithm I had written around my sophomore
        year, but turns out it is similar (and actually worse) than{" "}
        <a href="https://en.wikipedia.org/wiki/Flashsort">Flash Sort</a>. The
        idea is to find the minimum and maximum values in linear time, and then
        use interpolation to make a rough guess on where the other elements
        would be if the array were to be sorted.
      </p>
    ),
    tech: ["cpp"],
  },
  {
    title: "Diamonds with TypeScript",
    githubURL: "https://github.com/erhant/diamonds-with-typescript",
    tech: ["typescript", "solidity"],
    content: (
      <p>
        A reference implementation of <i>EIP-2535: The Diamond Standard</i>{" "}
        using TypeScript and TypeChain.
      </p>
    ),
  },
  {
    title: "NextJS + Web3 Starter",
    githubURL: "https://github.com/erhant/nextjs-web3-starter",
    demoURL: "https://nextjs-web3-starter-erhant.vercel.app/",
    content: (
      <p>
        A TypeScript template repository to create decentralized applications
        using <a href="https://nextjs.org/">NextJS</a> and{" "}
        <a href="https://hardhat.org/">Hardhat</a>! Has a simple counter
        contract and an ERC-20 token contract example in it.
      </p>
    ),
    tech: ["typescript", "next", "solidity"],
  },
  {
    title: "SpotiStuff",
    githubURL: "https://github.com/erhant/spoti-stuff",
    demoURL: "https://spoti-stuff.vercel.app/",
    tech: ["typescript", "react"],
    content: (
      <p>
        A collection of mini-applications I made using Spotify Web API. You can
        see audio features of your currently playing track, compare playlists of
        two users, and find if a user has added a track in some playlist.
      </p>
    ),
  },
  {
    title: "Orca Livecoding",
    githubURL: "https://github.com/erhant/orca-livecoding",
    tech: [],
    content: (
      <p>
        Of the various music livecoding programs, I particularly developed an
        interest in <a href="https://hundredrabbits.itch.io/orca">Orca</a>,
        which is a 2-dimensional esoteric programming language. I had some fun
        with it, such as creating a fretboard and tab-reader, or musical scale
        player with it.
      </p>
    ),
  },
  {
    title: "Burning Castle",
    githubURL: "https://github.com/erhant/burning_castle",
    demoURL: "https://oeis.org/A343275",
    tech: ["python"],
    content: (
      <p>
        My submissions to{" "}
        <a href="https://oeis.org/">Online Encyclopedia of Integer Sequences</a>
        . One submission in particular has really cool plots which resemble a
        burning castle, hence the name.
      </p>
    ),
  },
  {
    title: "Musical Plots",
    githubURL: "https://github.com/erhant/musical-plots",
    tech: ["python"],
    content: (
      <p>
        Using <code>matplotlib</code>, I have drawn a{" "}
        <a href="https://en.wikipedia.org/wiki/Circle_of_fifths">
          Circle of Fifths
        </a>
        , a fretboard, and a piano keyboard; with highlights on certain notes
        based on a scale or chord.
      </p>
    ),
  },
];

export const thesisProjects: ProjectType[] = [
  {
    title: "Exploring Mixed and Multi-Precision SpMV for GPUs",
    githubURL: "https://github.com/ParCoreLab/mixed-and-multi-spmv",
    demoURL: "https://ieeexplore.ieee.org/document/9980904",
    content: (
      <p>
        As my M.Sc. thesis, I worked on the optimization of Sparse Matrix-Vector
        Multiplication in NVIDIA GPUs. For this, I have researched ways of using
        mixed-precision (32-bit and 64-bit in particular) to my advantage, such
        that the accuracy is not affected too much but we still gain benefits
        from the reduced precisions. The methods were further extended to
        support multi-precision where both precisions are used per se, at
        different times.
      </p>
    ),
    tech: ["cpp", "python", "bash", "tex"],
  },
  {
    title: "Obtaining Mathematical Expressions of Numerical Algorithms",
    githubURL: "https://github.com/erhant/pseudomath",
    content: (
      <p>
        As my B.Sc. thesis, I wrote a small toy C-like language using{" "}
        <a href="https://github.com/zaach/jison">JISON</a>. The parser converted
        the code into a three tuple: set of variables, set of functions, and the
        initial function as the entry point. The resulting functions are
        composed in such a way that an input to the initial function will result
        in an output, just like it would in the code. Although I did not know
        about it at time, this is greatly similar to{" "}
        <a href="https://en.wikipedia.org/wiki/General_recursive_function">
          General Recursive Functions
        </a>
        .
      </p>
    ),
    tech: ["javascript", "tex"],
  },
];