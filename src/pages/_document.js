import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { injectGlobal } from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../theme/theme";
import Layout from "../components/Layout";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <title>Chronos</title>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content={
              "user-scalable=0, initial-scale=1, " +
              "minimum-scale=1, width=device-width, height=device-height"
            }
          />
          <link rel="stylesheet" href="../static/semantic.paper.min.css" />
          <style jsx global>{`
            body {
              margin: 0;
              font-family: "Roboto", sans-serif;
              font-size: 16px;
              background: #f6f7f7 !important;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
