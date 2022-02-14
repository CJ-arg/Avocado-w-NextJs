import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="p-20 bg-yellow-500 flex ">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
