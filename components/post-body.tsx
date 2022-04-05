import markdownStyles from "../styles/markdown.module.scss"
import { Box } from "@mantine/core"

type Props = {
  content: string
}
const PostBody = ({ content }: Props) => {
  return <Box className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{ __html: content }} />
}

export default PostBody
