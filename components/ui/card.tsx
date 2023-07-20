import React from 'react'

interface CardProps {
  children: React.ReactNode
}

export default function Card({ children }: CardProps) {
  return (
    <div className="relative flex w-full min-w-0 flex-col break-words rounded-lg bg-white p-5 shadow-lg">
      {children}
    </div>
  )
}
