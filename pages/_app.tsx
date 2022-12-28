import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@/css/docsearch.css'
import '@docsearch/css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import { Analytics } from 'pliny/analytics'
import { SearchProvider } from 'pliny/search'
import LayoutWrapper from '@/components/LayoutWrapper'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics analyticsConfig={siteMetadata.analytics} />
      <SearchProvider searchConfig={siteMetadata.search}>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </SearchProvider>
    </ThemeProvider>

    <!-- Google tag (gtag.js) -->
    <script strategy="lazyOnload" async src="https://www.googletagmanager.com/gtag/js?id=G-LN47CT2XVL"></script>
    <script strategy="lazyOnload">
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-LN47CT2XVL');
    </script>
  )
}
