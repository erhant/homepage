import { Box, useMantineTheme } from "@mantine/core"
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
}

type Props = {
  l: LanguageType
}
const Language = ({ l }: Props) => {
  const theme = useMantineTheme()

  return (
    <Box sx={{ color: theme.colors.icons[theme.colorScheme === "dark" ? 3 : 8] }}>
      <i className={lmap[l]} style={{ fontSize: "1.5em" }} />
    </Box>
  )
}

export default Language
