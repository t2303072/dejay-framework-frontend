import { Children, ReactNode } from 'react'

import { Spin } from '@/components/ui/spin'

interface ToastProps {
  children?: ReactNode
}

export function Toast({ children }: ToastProps) {
  return (
    <div className="fixed inset-0 z-10 flex justify-center">
      <div className="fixed bottom-14 z-20 flex h-12 w-52 animate-fade-up items-center justify-start rounded-md bg-slate-950 bg-opacity-80 px-4 text-white">
        <div>{children}</div>
        <Spin className="mr-4 h-5 w-5" />
        <p className="font-medium">Loading...</p>
      </div>
    </div>
  )
}
