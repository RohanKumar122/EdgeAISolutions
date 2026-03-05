import '../styles/globals.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Default dark mode
    document.documentElement.classList.add('dark')
  }, [])

  return <Component {...pageProps} />
}
