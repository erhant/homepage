import markdownStyles from "../styles/markdown.module.scss"

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div>
      <div className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default PostBody
