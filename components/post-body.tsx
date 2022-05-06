import markdownStyles from "../styles/markdown.module.scss"
import { Box } from "@mantine/core"
import { FC } from "react"

const PostBody: FC<{
  content: string
}> = ({ content }) => {
  return <Box className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{ __html: content }} />
}

export default PostBody
