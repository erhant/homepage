import ProjectType from "../../types/project"
import { Text, Anchor, Code } from "@mantine/core"

const sideProjects: ProjectType[] = [
  {
    title: "SpotiStuff",
    githubURL: "https://github.com/erhant/lighthouse-problem",
    demoURL: "https://erhant.github.io/lighthouse-problem/",
    langs: ["ts", "react", "sass"],
    content: (
      <Text>
        SpotiStuff is a collection of mini-applications I made using Spotify Web API. You can see audio features of your
        currently playing track, compare you playlists with some other user's playlist to see if you both have the same
        tracks, and find if you have added a track in your playlist. Used{" "}
        <Anchor href="https://mui.com/">Material UI</Anchor> within.
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
        time. I then couldn't solve this problem, and wrote a paper about it! This repository has codes about it. See
        the paper:{" "}
        <Anchor href="https://arxiv.org/abs/1903.09001">
          A Lighthouse Illumination Problem - Erhan Tezcan (arXiv, 2019)
        </Anchor>
      </Text>
    ),
  },
  {
    title: "Collatz Conjecture",
    langs: ["py", "ts", "hs", "cpp"],
    content: (
      <Text>
        As a form of recreational mathematics, I have been working on the Collatz Conjecture since late highschool. I
        did some small findings, mostly focusing on algebraic tools to study trajectories of numbers. I have one
        manuscript about it, see{" "}
        <Anchor href="https://arxiv.org/abs/1902.07312">On Collatz Conjecture - Erhan Tezcan (arXiv, 2019)</Anchor>.
        Another one coming soon, details ommitted though :)
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
    title: "Orca Livecoding",
    githubURL: "https://github.com/erhant/orca-livecoding",
    langs: [],
    content: (
      <Text>
        Of the various livecoding programs, I particularly developed an interest in{" "}
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
        Burning Castle is the name I gave to a simple mathematical integer sequence I had found, which has a spectacular
        plot. I submitted the integer sequence to{" "}
        <Anchor href="https://oeis.org/">Online Encyclopedia of Integer Sequences</Anchor>, but it later got removed for
        being too artificial. Nevertheless, I submitted a related sequence (A343275), which is simply{" "}
        <Code>{"a(n) = |2*n - 10^length(n)|"}</Code>. The repo has both of them.
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
        piano keyboard; it also highlights certain notes based on the scale or chord. Reason: why not?
      </Text>
    ),
  },
  {
    title: "Homepage",
    githubURL: "https://github.com/erhant/lighthouse-problem",
    langs: ["ts", "next", "sass"],
    content: (
      <Text>
        Well, this page itself is literally a side-project. It is loosely-based on the NextJS blog starter template, but
        I heavily modified and re-designed it with <Anchor href="https://mantine.dev/">Mantine UI</Anchor>.
      </Text>
    ),
  },
]

export default sideProjects
