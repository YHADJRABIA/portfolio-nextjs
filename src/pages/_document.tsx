import { ReactElement } from "react"
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document"

import { isProduction } from "@/utilities/general"
import GAnalytics from "@/lib/GAnalytics"

// This file only runs on the server, CSS and click events won't work here
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const { locale } = ctx
    return { ...initialProps, locale }
  }
  render(): ReactElement {
    const { locale } = this.props
    return (
      <Html lang={locale} translate="no">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
            integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
            crossOrigin="anonymous"
          />

          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Permanent+Marker|Poppins|Audiowide|Oswald|Lobster&amp;lang=en&display=swap"
          />
          <meta
            name="google-site-verification"
            content="M6aa3CbXmeU9R8s22ny5So7N0AQo9CmsNyQpZeytuKc"
          />

          {/* Google Analytics (only in production) */}
          {isProduction && <GAnalytics />}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
