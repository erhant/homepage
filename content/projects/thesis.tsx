import ProjectType from "../../types/project"
import { Text, Anchor } from "@mantine/core"
import FancyWord from "../../components/fancy-word"

const thesisProjects: ProjectType[] = [
  {
    title: "Exploring Mixed and Multi-Precision SpMV for GPUs",
    githubURL: "https://github.com/ParCoreLab/mixed-and-multi-spmv",
    demoURL: "https://parcorelab.ku.edu.tr/wp-content/uploads/2022/10/MSc_Thesis___Erhan_Tezcan-3.pdf",
    content: (
      <>
        <FancyWord word="M.Sc. Thesis - Koç University" />
        <Text>
          As my M.Sc. thesis, I worked on the optimization of Sparse Matrix-Vector Multiplication in NVIDIA GPUs. For
          this, I have researched ways of using mixed-precision (32-bit and 64-bit in particular) to my advantage, such
          that the accuracy is not affected too much but we still gain benefits from the reduced precisions. The methods
          were further extended to support multi-precision (both precisions are used per se, at different times).
        </Text>
      </>
    ),
    langs: ["cpp", "py", "bash", "tex"],
  },
  {
    title: "Obtaining Mathematical Expressions of Numerical Algorithms",
    githubURL: "https://github.com/erhant/pseudomath",
    content: (
      <>
        <FancyWord word="B.Sc. Thesis - Yildiz Technical University" />
        <Text>
          In my senior project, I wrote a small toy C-like language using{" "}
          <Anchor href="https://github.com/zaach/jison">JISON</Anchor>. The parser converted the code into a three
          tuple: set of variables, set of functions, and the initial function as the entry point. The resulting
          functions are composed in such a way that an input to the initial function will result in an output, just like
          it would in the code. Although I did not know about it at time, this is greatly similar to{" "}
          <Anchor href="https://en.wikipedia.org/wiki/General_recursive_function">General Recursive Functions</Anchor>.
        </Text>
      </>
    ),
    langs: ["js", "tex"],
  },
]

export default thesisProjects
