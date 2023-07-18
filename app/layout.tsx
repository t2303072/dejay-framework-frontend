import { AuthProvider } from '@/contexts/auth-provider'

import './globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: 'DEJAY',
  description: 'dejay sample app',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <div id="modal" />
        </AuthProvider>
      </body>
    </html>
  )
}
