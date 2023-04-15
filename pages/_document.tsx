import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <title>Joara</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta charSet="utf-8"></meta>
        <body className="bg-gray-50 select-none">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
