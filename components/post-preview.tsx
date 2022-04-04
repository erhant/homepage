import DateFormatter from "./date-formatter"
import Link from "next/link"

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
}

const PostPreview = ({ title, date, excerpt, slug }: Props) => {
  return (
    <div>
      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>{title}</a>
        </Link>
      </h3>
      <div>
        <DateFormatter dateString={date} />
      </div>
      <p>{excerpt}</p>
    </div>
  )
}

export default PostPreview
