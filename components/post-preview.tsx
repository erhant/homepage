import DateFormatter from "./date-formatter"
import Link from "next/link"
import { Title, Text, Box } from "@mantine/core"

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
}

const PostPreview = ({ title, date, excerpt, slug }: Props) => {
  return (
    <>
      <Title order={1} mb="lg">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {title}
        </Link>
      </Title>
      <Title order={3}>
        <DateFormatter dateString={date} />
      </Title>
      <Text>{excerpt}</Text>
    </>
  )
}

export default PostPreview
