import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface NormalInputProps {
  className?: string
  label?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void
  maxLength?: number
  value?: string
  disabled: boolean
  getValue: (text: string) => void
}

export default function NormalInput({
  label,
  className,
  onInput,
  onChange,
  maxLength,
  value,
  disabled,
  getValue,
}: NormalInputProps) {
  const [inputValue, setInputValue] = React.useState<string>('')

  useEffect(() => {
    if (value !== undefined) {
      // value가 undefined가 아닐 때만 setInputValue 호출
      setInputValue(value)
    }
  }, [value])

  useEffect(() => {
    getValue(inputValue)
  }, [inputValue])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)
    if (onChange) {
      onChange(e)
    }
  }

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (onInput) {
      onInput(e)
    }
  }

  return (
    <div className="flex ">
      {label && <label className="w-[100px] font-bold text-sm mt-2">{label}</label>}
      <input
        onInput={handleInput}
        disabled={disabled}
        maxLength={maxLength}
        onChange={handleInputChange} // 수정된 부분
        value={inputValue}
        className={twMerge('border border-slate-300 rounded text-sm flex min-h-[33.59px] p-1', className)}
      />
    </div>
  )
}
