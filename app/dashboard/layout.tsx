import { MainNav } from '@/components/main-nav'
import { SidebarNav } from '@/components/sidebar-nav'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="sticky min-h-screen flex-col">
      <header className="fixed w-full border-b bg-white">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <div className="container flex gap-10 pt-16">
        <aside className="h-[calc(100vh-4rem)] w-52 border-r py-10">
          <SidebarNav />
        </aside>
        <main className="py-10">{children}</main>
      </div>
    </div>
  )
}
