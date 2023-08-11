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
        <main className="h-full w-full py-10">{children}</main>
      </div>
    </div>
  )
}
