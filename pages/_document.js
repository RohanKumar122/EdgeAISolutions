import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'RK Edge AI Solutions — Private AI. Secure Systems. Edge Intelligence. AI-powered edge computing and security products built on Raspberry Pi.'} />
        <meta name="keywords" content="Edge AI, Raspberry Pi, AI Security Camera, Offline AI, Face Recognition, Privacy AI, Edge Computing" />
        <meta property="og:title" content={process.env.NEXT_PUBLIC_SITE_NAME || 'RK Edge AI Solutions'} />
        <meta property="og:description" content={process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Private AI. Secure Systems. Edge Intelligence.'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL || 'https://rkedgeai.in'} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
