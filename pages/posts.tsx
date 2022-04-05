import { getAllPosts } from "../lib/api"
import Post from "../types/post"
import PostPreview from "../components/post-preview"
import Layout from "../components/layout"
import { List, TypographyStylesProvider } from "@mantine/core"

type Props = {
  posts: Post[]
}

const Posts = ({ posts }: Props) => {
  return (
    <Layout>
      {/* posts set inner HTML, so we need this provider to apply our styles to them */}
      <TypographyStylesProvider>
        <List spacing="lg" size="lg" icon={<></>}>
          {posts.map((p, i) => (
            <List.Item>
              <PostPreview key={i} title={p.title} date={p.date} excerpt={p.excerpt} slug={p.slug} />
            </List.Item>
          ))}
        </List>
      </TypographyStylesProvider>
    </Layout>
  )
}

export default Posts

export const getStaticProps = async () => {
  const posts = await getAllPosts(["title", "date", "slug", "excerpt"])

  return {
    props: { posts },
  }
}
