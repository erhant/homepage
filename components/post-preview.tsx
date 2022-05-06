import DateFormatter from "./date-formatter"
import Link from "next/link"
import { Title, Text, Box } from "@mantine/core"
import { FC } from "react"

const PostPreview: FC<{
  title: string
  date: string
  excerpt: string
  slug: string
}> = ({ title, date, excerpt, slug }) => {
  return (
    <Box sx={{ borderLeft: "0.2em outset", paddingLeft: "2em" }}>
      <Title order={1}>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {title}
        </Link>
      </Title>

      <Text color="dimmed" size="lg">
        <DateFormatter dateString={date} />
      </Text>
      <Text>{excerpt}</Text>
    </Box>
  )
}

export default PostPreview
