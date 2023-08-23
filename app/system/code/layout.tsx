'use client'

import { radio, ThemeProvider } from '@material-tailwind/react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { MainNav } from '@/components/main-nav'
import { SidebarNav } from '@/components/sidebar-nav'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <header className="absolute w-full bg-white">
        <div className="flex items-center">
          <MainNav />
        </div>
      </header>
      <div className="container flex gap-10 pt-16">
        <SidebarNav />
        <DndProvider backend={HTML5Backend}>
          <ThemeProvider>
            <main className="h-full w-full py-10">{children}</main>
          </ThemeProvider>
        </DndProvider>
      </div>
    </div>
  )
}
