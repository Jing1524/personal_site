import { ModeToggleProvider } from '@/context/ModeProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModeToggleProvider>
      <Component {...pageProps} />
    </ModeToggleProvider>
  )
}
