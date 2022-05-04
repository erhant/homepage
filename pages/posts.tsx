import { getAllPosts } from "../api/posts"
import Post from "../types/post"
import PostPreview from "../components/post-preview"
import Layout from "../components/layout"
import { TypographyStylesProvider, Title } from "@mantine/core"
import Head from "next/head"

type Props = {
  posts: Post[]
}

const Posts = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog posts of Erhan Tezcan." key="desc" />
      </Head>

      <Layout>
        <>
          <Title order={1} mb="md">
            Blog
          </Title>

          {/* posts set inner HTML, so we need this provider to apply our styles to them */}
          <TypographyStylesProvider>
            {posts.map((p, i) => (
              <PostPreview key={i} title={p.title} date={p.date} excerpt={p.excerpt} slug={p.slug} />
            ))}
          </TypographyStylesProvider>
        </>
      </Layout>
    </>
  )
}

export default Posts

export const getStaticProps = async () => {
  const posts = await getAllPosts(["title", "date", "slug", "excerpt"])

  return {
    props: { posts },
  }
}
