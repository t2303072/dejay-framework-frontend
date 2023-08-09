import './globals.css'

import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'DEJAY',
  description: 'dejay sample app',
  icons: {
    icon: './favicon.ico',
  },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div id="modal" />
      </body>
    </html>
  )
}
