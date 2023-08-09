import Link from 'next/link'

export function SidebarNav() {
  return (
    <div className="text-sm font-medium">
      <Link href="/table">
        <div>TABLE</div>
      </Link>
      <Link href="/system/code/group">
        <div>GROUP CODE</div>
      </Link>
    </div>
  )
}
