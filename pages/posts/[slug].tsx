import { useRouter } from "next/router"
import ErrorPage from "next/error"
import { Container, Title, useMantineTheme, Text } from "@mantine/core"
import { getPostBySlug, getAllPosts } from "../../api/posts"
import Head from "next/head"
import toHTML from "../../api/markdown"
import PostType from "../../types/post"
import PostBody from "../../components/post-body"
import Layout from "../../components/layout"
import DateFormatter from "../../components/date-formatter"
import ScrollToTopAffix from "../../components/scroll-to-top-affix"

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
  const theme = useMantineTheme()
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  } else {
    return router.isFallback ? (
      <h1>Loading…</h1>
    ) : (
      <Layout>
        <>
          <Container>
            <article>
              <Head>
                <title>{post.title}</title>
                {/* Math rendering */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.0/dist/katex.min.css"></link>
                {/* Code higlighting */}
                {theme.colorScheme === "dark" ? (
                  <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/atom-one-dark.min.css"
                  ></link>
                ) : (
                  <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/atom-one-light.min.css"
                  ></link>
                )}
              </Head>
              <div style={{ textAlign: "center" }}>
                <Title order={1}>{post.title}</Title>
                <Text color="dimmed" size="lg">
                  <DateFormatter dateString={post.date} />
                </Text>
              </div>

              <PostBody content={post.content} />
            </article>
          </Container>

          <ScrollToTopAffix />
        </>
      </Layout>
    )
  }
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(params.slug, ["title", "date", "slug", "content"])
  const content = await toHTML(post.content || "")

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts(["slug"])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
          path: post.path,
        },
      }
    }),
    fallback: false,
  }
}
