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
    <Box sx={{ borderLeft: "0.2em outset", paddingLeft: "2em" }}>
      <Title order={1}>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {title}
        </Link>
      </Title>
      <Title order={5}>
        <DateFormatter dateString={date} />
      </Title>
      <Text>{excerpt}</Text>
    </Box>
  )
}

export default PostPreview
