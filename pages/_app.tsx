import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@/css/docsearch.css'
import '@docsearch/css'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

import siteMetadata from '@/data/siteMetadata'
import { Analytics } from 'pliny/analytics'
import { SearchProvider } from 'pliny/search'
import LayoutWrapper from '@/components/LayoutWrapper'

// Pages that render standalone, without the site header/nav/footer chrome.
const STANDALONE_PAGES = ['/bottle-temp-calculator']

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isStandalone = STANDALONE_PAGES.includes(router.pathname)

  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme={siteMetadata.theme}
      enableSystem={false}
      themes={['dark', 'light']}
    >
      <Head>
        <meta content="width=device-width, initial-scale=1, viewport-fit=cover" name="viewport" />
      </Head>
      <Analytics analyticsConfig={siteMetadata.analytics} />
      <SearchProvider searchConfig={siteMetadata.search}>
        {isStandalone ? (
          <Component {...pageProps} />
        ) : (
          <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
        )}
      </SearchProvider>
    </ThemeProvider>
  )
}
