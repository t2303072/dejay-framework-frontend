import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface NormalInputProps {
  className?: string
  label?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void
  maxLength?: number
  value?: string
  disabled: boolean
}

export default function NormalInput({
  label,
  className,
  onInput,
  onChange,
  maxLength,
  value,
  disabled,
}: NormalInputProps) {
  return (
    <div className="flex ">
      {label && <label className="w-[100px] font-bold text-sm mt-2">{label}</label>}
      <input
        onInput={onInput}
        disabled={disabled}
        maxLength={maxLength}
        onChange={onChange}
        value={value}
        className={twMerge('border border-slate-300 rounded text-sm flex min-h-[33.59px] p-1', className)}
      />
    </div>
  )
}
