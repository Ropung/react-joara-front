import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <title>Joara</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta charSet="utf-8"></meta>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
