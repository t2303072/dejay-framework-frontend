interface LoginLayoutProps {
  children: React.ReactNode
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return <div className="flex min-h-screen items-center">{children}</div>
}
