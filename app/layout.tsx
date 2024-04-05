import { Metadata } from 'next'

import { Toaster } from 'react-hot-toast'

import '@/app/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { fontInter } from '@/lib/fonts'
import GoogleAnalytics from './analytics'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Providers } from '@/components/providers'
// import Header  from '@/components/header'
import dynamic from 'next/dynamic'
// const Header = dynamic(import {Header} from '@/components/header', {
//   ssr: false, // Disable server-side rendering for this component
// });
const Header = dynamic(() => import('@/components/header'), {
  ssr: false // Disable server-side rendering for this component
})
export const metadata: Metadata = {
  metadataBase: new URL('https://ai.zoolabs.io'),
  title: {
    default: 'ZOO AI Chat',
    template: `%s - ZOO AI Chat`
  },
  description: 'An AI-powered ZOO chatbot powered by love & animals',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  icons: {
    icon: '/zooLogoLight.svg',
    shortcut: '/zooLogoLight.svg',
    apple: '/zooLogoLight.svg'
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning
      style={{ scrollBehavior: 'smooth' }}
    >
      <head />
      <body className={cn('font-inter', fontInter.variable)}>
        <GoogleAnalytics ga_id="G-QHHLV2FMT9" />
        <Toaster />
        <Providers attribute="class" defaultTheme="dark" enableSystem>
          <div className="w-full flex min-h-screen flex-col">
            {/* @ts-ignore */}
            {/* <Header /> */}
            <main className="flex flex-1 flex-col">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
