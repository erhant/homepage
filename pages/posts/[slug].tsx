import { useRouter } from "next/router"
import ErrorPage from "next/error"
import { useWindowScroll } from "@mantine/hooks"
import { Affix, Button, Container, Text, Transition } from "@mantine/core"
import { ArrowUp } from "tabler-icons-react"
import { getPostBySlug, getAllPosts } from "../../lib/api"
import Head from "next/head"
import markdownToHtml from "../../lib/markdownToHtml"
import PostType from "../../types/post"
import PostBody from "../../components/post-body"

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
  const [scroll, scrollTo] = useWindowScroll()
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  } else {
    return router.isFallback ? (
      <h1>Loading…</h1>
    ) : (
      <>
        <Container>
          <article>
            <Head>
              <title>{post.title}</title>
              {/* Math rendering */}
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.0/dist/katex.min.css"></link>
              {/* Code higlighting */}
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github.min.css"
              ></link>
            </Head>
            <h1>{post.title}</h1>
            <PostBody content={post.content} />
          </article>
        </Container>

        <Affix position={{ bottom: 20, right: 20 }}>
          <Transition transition="slide-up" mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <Button leftIcon={<ArrowUp />} style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
                Scroll to top
              </Button>
            )}
          </Transition>
        </Affix>
      </>
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
  const content = await markdownToHtml(post.content || "")

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
