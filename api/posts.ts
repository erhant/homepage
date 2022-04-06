import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import glob from "glob"

const postsDirectoryName = "_posts"
const postsDirectory = join(process.cwd(), postsDirectoryName)
const uniqueSluggifier = "___"
function pathToSlug(path: string): string {
  return path.slice(postsDirectoryName.length + 1).replaceAll("/", uniqueSluggifier)
}
function slugToPath(slug: string): string {
  return slug.replaceAll(uniqueSluggifier, "/")
}

function getPostPaths(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    glob("_posts/**/*.md", (err, files) => {
      if (err) reject(err)
      else resolve(files.map((f: string) => f))
    })
  })
}

export async function getPostBySlug(slug: string, fields: string[] = []) {
  return await getPostByPath(join(postsDirectory, slugToPath(slug)), fields)
}
export async function getPostByPath(path: string, fields: string[] = []) {
  const { data, content } = matter(fs.readFileSync(path, "utf8"))
  const items: {
    [key: string]: string
  } = {}

  // ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = pathToSlug(path)
    }
    if (field === "content") {
      items[field] = content
    }
    if (typeof data[field] !== "undefined") {
      items[field] = data[field]
    }
  })
  return items
}

export async function getAllPosts(fields: string[] = []) {
  const paths = await getPostPaths()
  console.log(paths)
  // read posts
  const posts = []
  for (let i = 0; i < paths.length; ++i) posts.push(await getPostByPath(paths[i], fields))
  // sort them
  posts.sort((p, q) => (p.date > q.date ? -1 : 1))
  return posts
}
