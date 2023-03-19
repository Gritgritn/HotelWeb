import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Fira_Mono } from '@next/font/google'

const firamono = Fira_Mono({
  weight: '500',
  variable: '--fira-font',
  subsets: ['cyrillic'],
})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={firamono.className}>
  <Component {...pageProps} />
</main>
}
