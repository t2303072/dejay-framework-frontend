'use client'

import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const Button = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={twMerge('rounded-md bg-slate-950 text-sm font-bold text-white hover:bg-slate-700', className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)
Button.displayName = 'Button'
