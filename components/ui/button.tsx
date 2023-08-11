'use client'

import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const Button = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={twMerge(
          'rounded bg-slate-950 text-sm font-bold pl-3 pr-3 pt-2 pb-2 text-center max-h-9 text-white hover:bg-slate-700',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)
Button.displayName = 'Button'
