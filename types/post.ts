type PostType = {
  slug: string // slug to access this post via URL
  path: string // path at which this post is located at
  title: string // title of the ppost
  date: string // a date
  excerpt: string // a preview of the post
  content: string // HTML content, parsed by unified
}

export default PostType
