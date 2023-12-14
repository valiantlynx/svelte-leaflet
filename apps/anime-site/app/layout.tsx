
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'AnimeVariant watch anime online free',
    template: '%s | AnimeVariant watch anime online free',
  },
  description: 'Watch anime online free in high quality 720p, 1080p english subbed and dubbed on any browser and devices. Watch anime similar to kissanime, 9anime and gogoanime in HTML5 videos format with different anime sources',
  keywords: ['anime', 'watch anime', 'watch anime online', 'watch anime free', 'anime online', 'anime free', 'anime streaming', 'anime streaming online', 'anime streaming free', 'anime streaming sites', 'anime streaming websites', 'anime streaming app', 'anime streaming apps', 'anime streaming sites free', 'anime streaming websites free', 'anime streaming app free', 'anime streaming apps free', 'anime streaming sites no ads', 'anime streaming websites no ads', 'anime streaming app no ads', 'anime streaming apps no ads', 'anime streaming sites no ads free', 'anime streaming websites no ads free', 'anime streaming app no ads free', 'anime streaming apps no ads free', 'anime streaming sites no ads no sign up', 'anime streaming websites no ads no sign up', 'anime streaming app no ads no sign up', 'anime streaming apps no ads no sign up', 'anime streaming sites no ads no sign up free', 'anime streaming websites no ads no sign up free', 'anime streaming app no ads no sign up free', 'anime streaming apps no ads no sign up free', 'anime streaming sites no ads no sign up no download', 'anime streaming websites no ads no sign up no download', 'anime streaming app no ads no sign up no download', 'anime streaming apps no ads no sign up no download', 'anime streaming sites no ads no sign up no download free', 'anime streaming websites no ads no sign up no download free', 'anime streaming app no ads no sign up no download free', 'anime streaming apps no ads no sign up no download free', 'anime streaming sites no ads no sign up no download no registration', 'anime streaming websites no ads no sign up no download no registration', 'anime streaming app no ads no sign up no download no registration', 'anime streaming apps no ads no sign up no download no registration', 'anime streaming sites no ads no sign up no download no registration free', 'anime streaming websites no ads no sign up no download no registration free', 'anime streaming app no ads no sign up no download no registration free', 'anime streaming apps no ads no sign up no download no registration free', 'anime streaming sites no ads no sign up no download no registration no credit card', 'anime streaming websites no ads no sign up no download no registration no credit card', 'anime streaming app no ads no sign up no download no registration no credit card', 'anime streaming apps no ads'],
  creator: 'Valiantlynx',
  aplicattionName: 'AnimeVariant',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Valiantlynx', url: 'https://valiantlynx.com' }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://animevariant.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/og-image.png',
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">


      <body className={`${inter.className} bg-base-200`}>
        <Navbar />
        {children}
        <Footer />
      </body>
            <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7827487944601896" strategy="afterInteractive" />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
      
<Script
        id="clarity-toseestuff"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", '${process.env.CLARITY_KEY}');`,
        }}
      />
    </html>
  )
}
