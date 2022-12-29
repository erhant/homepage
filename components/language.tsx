import { Box, useMantineTheme, Tooltip } from "@mantine/core"
import { FC } from "react"
import LanguageType from "../types/language"

// https://devicon.dev/

const lmap: { [key: string]: string } = {
  js: "devicon-javascript-plain",
  ts: "devicon-typescript-plain",
  c: "devicon-c-plain",
  py: "devicon-python-plain",
  cpp: "devicon-cplusplus-plain",
  hs: "devicon-haskell-plain",
  go: "devicon-go-original-wordmark",
  tex: "devicon-latex-plain",
  sass: "devicon-sass-plain",
  sol: "devicon-solidity-plain",
  next: "devicon-nextjs-plain",
  bash: "devicon-bash-plain",
  react: "devicon-react-plain",
  node: "devicon-nodejs-plain",
  express: "devicon-express-original",
  rust: "devicon-rust-plain",
}
const ldesc: { [key: string]: string } = {
  js: "JavaScript",
  ts: "TypeScript",
  c: "C",
  py: "Python",
  cpp: "C++",
  hs: "Haskell",
  go: "Golang",
  tex: "LaTeX",
  sass: "SASS",
  sol: "Solidity",
  next: "NextJS",
  bash: "Bash",
  react: "ReactJS",
  node: "NodeJS",
  express: "ExpressJS",
  rust: "Rust",
}

const Language: FC<{
  l: LanguageType
}> = ({ l }) => {
  const theme = useMantineTheme()

  return (
    <Box sx={{ color: theme.colors.icons[theme.colorScheme === "dark" ? 3 : 8] }}>
      <Tooltip label={ldesc[l]}>
        <i className={lmap[l]} style={{ fontSize: "1.8em" }} />
      </Tooltip>
    </Box>
  )
}

export default Language
