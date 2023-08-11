import React from 'react'
import { twMerge } from 'tailwind-merge'

interface NormalInputProps {
  className?: string
  label?: string
}

export default function NormalInput({ label, className }: NormalInputProps) {
  return (
    <div className="flex">
      {label && <label className="w-[100px] font-bold">{label}</label>}
      <input className={twMerge('border border-slate-300 rounded flex max-h-9 p-1', className)} />
    </div>
  )
}
