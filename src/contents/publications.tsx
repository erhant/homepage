import type PublicationType from "../types/publication";

export const publications: PublicationType[] = [
  {
    tech: ["c", "cpp", "python", "tex"],
    githubURL: "https://github.com/ParCoreLab/mixed-and-multi-spmv",
    paperURL: "https://ieeexplore.ieee.org/document/9980904",
    content: (
      <p>
        Erhan Tezcan, Tugba Torun, Fahrican Koşar, Kamer Kaya, and Didem Unat.{" "}
        <em>
          "Mixed and Multi-Precision SpMV for GPUs with Row-wise Precision
          Selection"
        </em>
        . IEEE 34th International Symposium on Computer Architecture and High
        Performance Computing (SBAC-PAD'22), November 2-5, 2022, Bordeaux,
        France. <b>Best Paper Award</b>.
      </p>
    ),
  },
  {
    tech: ["python", "tex"],
    githubURL: "https://github.com/ParCoreLab/ComScribe",
    paperURL: "https://link.springer.com/chapter/10.1007/978-3-031-06156-1_4",
    content: (
      <p>
        Muhammet Abdullah Soytürk, Palwisha Akhtar, Erhan Tezcan, and Didem
        Unat, <em>"Monitoring Collective Communication Among GPUs"</em>,
        European Conference on Parallel Processing (Workshop Paper), 2022
      </p>
    ),
  },
  {
    tech: ["python", "tex"],
    githubURL: "https://github.com/ParCoreLab/ComScribe",
    paperURL: "https://link.springer.com/chapter/10.1007/978-3-030-71058-3_10",
    content: (
      <p>
        Palwisha Akhtar, Erhan Tezcan, Fareed Mohammad Qararyah, Didem Unat,{" "}
        <em>"ComScribe: Identifying Intra-node GPU Communication"</em>,
        BENCH'20, November 2020
      </p>
    ),
  },
  {
    tech: ["python", "javascript", "tex"],
    githubURL: "https://github.com/erhant/lighthouse-problem",
    paperURL: "https://arxiv.org/abs/1903.09001",
    content: (
      <p>
        Erhan Tezcan, <em>"A Lighthouse Illumniation Problem"</em>, arXiv
        e-prints, March 2019
      </p>
    ),
  },
  {
    tech: ["python", "javascript", "cpp", "haskell", "tex"],
    githubURL: "https://github.com/collatz-prefixes",
    paperURL: "https://arxiv.org/abs/1902.07312",
    content: (
      <p>
        Erhan Tezcan, <em>"On Collatz Conjecture"</em>, arXiv e-prints, February
        2019
      </p>
    ),
  },
];
