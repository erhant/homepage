import DateFormatter from "./date-formatter"
import Link from "next/link"
import { Title, Text, Box, Anchor } from "@mantine/core"
import { FC } from "react"
import { motion } from "framer-motion"

const PostPreview: FC<{
  title: string
  date: string
  excerpt: string
  slug: string
}> = ({ title, date, excerpt, slug }) => {
  return (
    <motion.div
      style={{ paddingLeft: "2em", width: "95%" }}
      initial={{ borderLeft: "0.2em outset" }}
      whileHover={{ borderLeft: "1.2em outset" }}
      transition={{ ease: "easeOut" }}
    >
      <Link as={`/posts/${slug}`} href="/posts/[slug]" passHref>
        <Anchor>
          <Title>{title}</Title>
        </Anchor>
      </Link>

      <Text color="dimmed" size="lg">
        <DateFormatter dateString={date} />
      </Text>
      <Text>{excerpt}</Text>
    </motion.div>
  )
}

export default PostPreview
