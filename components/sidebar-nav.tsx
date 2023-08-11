import Link from 'next/link'

export function SidebarNav() {
  return (
    <aside className="sticky flex border-r w-52 border-r-slate-300">
      <div className="text-sm font-medium  py-10">
        <Link href="/table">
          <div>TABLE</div>
        </Link>
        <Link href="/system/code/group">
          <div>GROUP CODE</div>
        </Link>
      </div>
    </aside>
  )
}
