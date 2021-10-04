// This file only runs on the server, CSS and click events won't work here
import { ReactElement } from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

import { GA_TRACKING_ID } from "../lib/gtag";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const { locale } = ctx;
    return { ...initialProps, locale };
  }
  render(): ReactElement {
    const { locale } = this.props;
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
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Permanent+Marker|Poppins|Audiowide|Oswald|Lobster&amp;lang=en&display=swap"
          />
          <meta
            name="google-site-verification"
            content="M6aa3CbXmeU9R8s22ny5So7N0AQo9CmsNyQpZeytuKc"
          />

          {/* Google Analytics */}
          <meta charSet="utf-8">
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
              }}
            />
          </meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
