import React from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={twMerge(
        'relative flex w-full min-w-0 flex-col break-words rounded-lg border border-slate-300 bg-white p-5',
        className,
      )}
    >
      {children}
    </div>
  )
}
