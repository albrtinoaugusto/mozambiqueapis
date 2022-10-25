import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='p-5 max-w-7xl mx-auto text-text'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
