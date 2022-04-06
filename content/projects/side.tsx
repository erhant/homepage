import ProjectType from "../../types/project"
import { Text, Anchor, Code } from "@mantine/core"

const sideProjects: ProjectType[] = [
  {
    title: "Homepage",
    githubURL: "https://github.com/erhant/lighthouse-problem",
    langs: ["ts", "next"],
    content: (
      <Text>
        Well, this page itself is literally a side-project. It is loosely-based in the NextJS blog starter template, but
        I heavily modified and re-designed it with Mantine UI.
      </Text>
    ),
  },
  {
    title: "SpotiStuff",
    githubURL: "https://github.com/erhant/lighthouse-problem",
    demoURL: "https://erhant.github.io/lighthouse-problem/",
    langs: ["ts", "react", "sass"],
    content: (
      <Text>
        SpotiStuff is a collection of mini-applications I made using Spotify Web API. You can see audio features of your
        currently playing track, compare you playlists with some other user's playlist to see if you both have the same
        tracks, and find if you have added a track in your playlist.
      </Text>
    ),
  },
  {
    title: "Lighthouse Problem",
    githubURL: "https://github.com/erhant/lighthouse-problem",
    demoURL: "https://erhant.github.io/lighthouse-problem/",
    langs: ["py", "js"],
    content: <Text>Todo</Text>,
  },
  {
    title: "Collatz Conjecture",
    demoURL: "https://erhant.github.io/lighthouse-problem/",
    langs: ["py", "js"],
    content: <Text>Todo</Text>,
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
    title: "Musical Plots",
    githubURL: "https://github.com/erhant/musical-plots",
    langs: ["py"],
    content: <Text>Todo</Text>,
  },
  {
    title: "Burning Castle",
    githubURL: "https://github.com/erhant/burning_castle",
    demoURL: "https://oeis.org/A343275",
    langs: ["py"],
    content: (
      <Text>
        Burning Castle is the name I gave to a simple mathematical function with a beautiful plot. I submitted the
        integer sequence to <Anchor href="https://oeis.org/">Online Encyclopedia of Integer Sequences</Anchor>, but it
        later got removed for being too artificial. Nevertheless, I submitted a related sequence (A343275), which is
        simply <Code>{"a(n) = |2*n - 10^length(n)|"}</Code>. The repo has both of them.
      </Text>
    ),
  },
]

export default sideProjects
