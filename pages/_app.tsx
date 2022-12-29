import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import original from 'react95/dist/themes/original'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={original}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
