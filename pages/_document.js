import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <script
          data-ad-client="ca-pub-4111628699519217"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Html>
    );
  }
}

export default MyDocument;
