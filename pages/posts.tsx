import { getAllPosts } from "../lib/api"
import Post from "../types/post"
import PostPreview from "../components/post-preview"

type Props = {
  posts: Post[]
}

const Posts = ({ posts }: Props) => {
  return (
    <div>
      {posts.map((p, i) => (
        <PostPreview key={i} title={p.title} date={p.date} excerpt={p.excerpt} slug={p.slug} />
      ))}{" "}
    </div>
  )
}

export default Posts

export const getStaticProps = async () => {
  const posts = getAllPosts(["title", "date", "slug", "author", "coverImage", "excerpt"])

  return {
    props: { posts },
  }
}
