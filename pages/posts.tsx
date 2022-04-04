import { getAllPosts } from "../lib/api"
import Post from "../types/post"
import PostPreview from "../components/post-preview"
import { TypographyStylesProvider } from "@mantine/core"

type Props = {
  posts: Post[]
}

const Posts = ({ posts }: Props) => {
  return (
    <TypographyStylesProvider>
      {posts.map((p, i) => (
        <PostPreview key={i} title={p.title} date={p.date} excerpt={p.excerpt} slug={p.slug} />
      ))}
    </TypographyStylesProvider>
  )
}

export default Posts

export const getStaticProps = async () => {
  const posts = getAllPosts(["title", "date", "slug", "author", "coverImage", "excerpt"])

  return {
    props: { posts },
  }
}
