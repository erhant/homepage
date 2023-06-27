/** A dictionary of tech names to their shield.io badge links and alt names. */
export const TECH_BADGE_PARAMS = {
  typescript: {
    p: ".ts-3178C6?logo=typescript&logoColor=white",
    alt: "TypeScript",
  },
  circom: {
    p: ".circom-111111?logo=data:image/jpeg;base64,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",
    alt: "Circom",
  },
  solidity: {
    p: ".sol-363636?logo=solidity&logoColor=white",
    alt: "Solidity",
  },
  react: {
    p: ".tsx-20232a?logo=react&logoColor=61DAFB",
    alt: "ReactJS",
  },
  next: {
    p: ".next-000000?logo=next.js&logoColor=white",
    alt: "NextJS",
  },
  git: {
    p: ".git-F05032.svg?logo=git&logoColor=white",
    alt: "Git",
  },
  bash: {
    p: ".sh-4EAA25?logo=gnubash&logoColor=white",
    alt: "Bash",
  },
  eslint: {
    p: ".eslint-4B32C3?logo=eslint&logoColor=white",
    alt: "ESLint",
  },
  prettier: {
    p: ".prettier-323330?logo=prettier&logoColor=white",
    alt: "Prettier",
  },
  vscode: {
    p: ".vscode-007ACC?logo=visualstudiocode&logoColor=white",
    alt: "VSCode",
  },
  go: {
    p: ".go-black?logo=go&logoColor=00ADD8",
    alt: "Golang",
  },
  javascript: {
    p: ".js-323330?logo=javascript&logoColor=F7DF1E",
    alt: "Javascript",
  },
  c: {
    p: ".c-A8B9CC?logo=c&logoColor=white",
    alt: "C",
  },
  cpp: {
    p: ".cpp-00599C?logo=cplusplus&logoColor=white",
    alt: "C++",
  },
  cuda: {
    p: ".cu-76B900?logo=nvidia&logoColor=white",
    alt: "Cuda",
  },
  racket: {
    p: ".scm-9F1D20?logo=racket&logoColor=white",
    alt: "Scheme",
  },
  scss: {
    p: ".scss-CC6699?logo=SASS&logoColor=white",
    alt: "SCSS",
  },
  python: {
    p: ".py-3776AB?logo=python&logoColor=white",
    alt: "Python",
  },
  pgsql: {
    p: ".sql-4169E1?logo=postgresql&logoColor=white",
    alt: "PostgreSQL",
  },
  tex: {
    p: ".tex-008080?logo=latex&logoColor=white",
    alt: "LaTeX",
  },
  mongo: {
    p: ".json-47A248?logo=mongodb&logoColor=white",
    alt: "MongoDB",
  },
  haskell: {
    p: ".hs-5D4F85?logo=haskell&logoColor=white",
    alt: "Haskell",
  },
  rust: {
    p: ".rs-F74B01?logo=rust&logoColor=white",
    alt: "Rust",
  },
  redis: {
    p: ".rdb-DC382D?logo=redis&logoColor=white",
    alt: "Redis",
  },
  sage: {
    p: ".sage-271EB5?style=flat-square&logo=data:image/jpeg;base64,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",
    alt: "SageMath",
  },
  markdown: {
    p: ".md-000000?logo=markdown&logoColor=white",
    alt: "Markdown",
  },
} as const;

export const MAIN_TECH: (keyof typeof TECH_BADGE_PARAMS)[] = [
  "typescript",
  "circom",
  "go",
  "solidity",
  "react",
  "next",
  "git",
  "bash",
];
