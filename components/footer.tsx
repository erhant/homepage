import { Footer as _Footer } from "@mantine/core"

const Footer = () => {
  return (
    <_Footer height={30} p="xs">
      &copy; Erhan Tezcan {new Date().getFullYear()} &nbsp;&nbsp; (
      <a href="https://github.com/erhant/blog-static">GitHub</a>)
    </_Footer>
  )
}

export default Footer
