import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import Script from "next/script.js";
import React from "react";

class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <title>TagIamTop</title>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=G-RDBNGEZT97`}
          />
          <Script
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RDBNGEZT97', {
              page_path: window.location.pathname,
            });
          `,
              }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />

        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default MyDocument;


// {/*    dangerouslySetInnerHTML={{*/}
// {/*      __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':*/}
// {/*              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],*/}
// {/*              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=*/}
// {/*              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);*/}
// {/*              })(window,document,'script','dataLayer','GTM-PHCMNFB');`,*/}
// {/*    }}*/}
// {/*/>*/}
{/*<noscript*/}
{/*    dangerouslySetInnerHTML={{*/}
{/*      __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PHCMNFB"*/}
{/*                    height="0" width="0" style="display:none;visibility:hidden"></iframe>`,*/}
{/*    }}*/}
{/*/>*/}
