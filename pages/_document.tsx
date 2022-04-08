import Document, { Html, Head, Main, NextScript } from "next/document"
import { createGetInitialProps } from "@mantine/next"

const getInitialProps = createGetInitialProps()

// Document component handles the initial document markup and renders only on the server side.
// Commonly used for implementing server side rendering for css-in-js libraries.
export default class MyDocument extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* devicons to render language icons, such as in projects section */}
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}